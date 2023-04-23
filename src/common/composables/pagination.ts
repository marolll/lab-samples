import { type ComputedRef, computed, onMounted, ref } from "vue";

// REUSABLE DATA QUERY WITH ANY KIND OF DATA
export const usePagination = ({ callback, defaultPagination }: Params) => {
  // ***********
  // STATES
  // ***********
  const pagination = ref<Pagination>({ ...defaultPaginationState });

  // ***********
  // SETTERS
  // ***********
  const setPage = ({ value, isCallback = true }: SetParams) => {
    pagination.value.page = value;
    isCallback && callback();
  };
  const setRecords = ({ value, isCallback = true }: SetParams) => {
    pagination.value.records = value;
    isCallback && callback();
  };
  const setTotalRecords = ({ value, isCallback = false }: SetParams) => {
    pagination.value.totalRecords = value;
    isCallback && callback();
  };

  const setDefaultPagination = () => {
    // Only if needed
    if (defaultPagination) {
      Object.entries(defaultPagination).forEach((cur) => {
        const key = cur[0] as PaginationKeyType;
        const val = cur[1];
        pagination.value[key] = val;
      });
    }
  };

  // ***********
  // GETTERS
  // ***********
  const page: ComputedRef<string> = computed(() => pagination.value.page);

  const records: ComputedRef<string> = computed(() => pagination.value.records);

  const totalRecords: ComputedRef<string> = computed(
    () => pagination.value.totalRecords
  );
  const paginationParams: ComputedRef<string> = computed(
    () =>
      `$page=${pagination?.value?.page}&$records=${pagination?.value?.records}`
  );

  // ************
  // ON MOUNTED
  // ************
  onMounted(() => setDefaultPagination());

  // ********
  // RETURN
  // ********
  return {
    setPage,
    setRecords,
    setTotalRecords,
    page,
    records,
    totalRecords,
    paginationParams,
  };
};

// Default pagination state
const defaultPaginationState: Pagination = {
  page: "1",
  records: "8",
  totalRecords: "0",
};

interface Pagination {
  page: string;
  records: string;
  totalRecords: string;
}

interface SetParams {
  value: any;
  isCallback?: boolean;
}

type PaginationKeyType = "page" | "records" | "totalRecords";

interface Params {
  callback: () => any | void;
  defaultPagination?: Pagination;
}
