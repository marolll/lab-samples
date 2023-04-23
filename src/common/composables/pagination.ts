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
  const setPage = (newPage: string) => {
    pagination.value.page = newPage;
    callback && callback();
  };

  const setRecords = (newRecords: string) => {
    pagination.value.records = newRecords;
    callback && callback();
  };

  const setTotalRecords = (newTotalRecords: string) => {
    pagination.value.totalRecords = newTotalRecords;
    callback && callback();
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

type PaginationKeyType = "page" | "records" | "totalRecords";

interface Params {
  callback: () => any | void;
  defaultPagination?: Pagination;
}
