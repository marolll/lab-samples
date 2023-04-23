<template>
  <nav class="pagination" role="navigation" aria-label="Pagination Navigation">
    <!-- RESULTS -->

    <div v-if="totalRecords >= records">
      <span>
        <!-- PREVIOUS PAGE -->
        <span aria-disabled="true" aria-label="pagination.prev">
          <button
            @click="setPage({ value: page - 1 })"
            :disabled="page == 1"
            rel="next"
            class="pagination-button"
            aria-label="pagination.prev"
          >
            Previous
          </button>
        </span>

        <!-- PAGES IN BETWEEN -->
        <span v-for="(curPage, pageIndex) in pages" :key="pageIndex">
          <button
            class="pagination-button"
            :class="curPage === page && 'active-button'"
            :disabled="curPage === '...' || curPage === page"
            @click="
              curPage !== '...' ? setPage({ value: curPage }) : () => null
            "
          >
            {{ curPage }}
          </button>
        </span>

        <!-- NEXT PAGE -->
        <span aria-disabled="true" aria-label="pagination.next">
          <button
            class="pagination-button"
            @click="setPage({ value: page + 1 })"
            rel="next"
            aria-label="pagination.next"
            :disabled="page >= maxPage"
          >
            Next
          </button>
        </span>
      </span>
    </div>
  </nav>
</template>

<!-- SCRIPT -->
<script setup lang="ts">
import Pagination from "@/common/interfaces/ui/pagination";
import { ComputedRef, computed } from "vue";
import { type PaginationSetParams } from "@/common/interfaces/ui/pagination";

interface Props {
  pagination: Pagination;
  setPage: ({}: PaginationSetParams) => void;
}

const props = defineProps<Props>();

// ************************
// COMPUTED
// ************************
const totalRecords: ComputedRef<number> = computed(() =>
  Number(props?.pagination?.totalRecords)
);

const records: ComputedRef<number> = computed(() =>
  Number(props?.pagination?.records)
);

const page: ComputedRef<number> = computed(() =>
  Number(props?.pagination?.page)
);

const maxPage: ComputedRef<number> = computed(() =>
  Math.ceil(totalRecords.value / records.value - 1)
);

// COMPUTED PAGES - GENERATE ON CHANGE
const pages = computed(() => {
  // There will be always cur page
  const pagesArr = [];

  // MAKE SIMPLE PAGINATION IF THERE ARE ONLY 5 or less pages
  if (maxPage.value <= 5) {
    for (let i = 1; i <= maxPage.value; i++) {
      pagesArr.push(i);
    }
    return pagesArr;
  }
  // MORE COMPLEX PAGINATION
  else {
    // If you are at the start
    if (page.value === 2) {
      for (let i = page.value - 1; i < page.value + 2; i++) {
        if (i <= maxPage.value) {
          pagesArr.push(i);
        }
      }
      // Add placeholder
      pagesArr.push("...");
      // Add last page
      if (page.value !== maxPage.value) {
        pagesArr.push(maxPage.value);
      }
    } else if (page.value < 3) {
      // Add current and next two pages
      for (let i = page.value; i < page.value + 3; i++) {
        if (i <= maxPage.value) {
          pagesArr.push(i);
        }
      }
      // Add placeholder
      pagesArr.push("...");

      // Add last page
      if (page.value !== maxPage.value) {
        pagesArr.push(maxPage.value);
      }
    } else if (maxPage.value - 1 <= page.value) {
      // If you are at the end

      pagesArr.push(1);
      pagesArr.push("...");
      // Add current and previous two pages
      for (let i = maxPage.value - 2; i <= maxPage.value; i++) {
        pagesArr.push(i);
      }
    } else {
      // If you are somewhere in the middle
      pagesArr.push(1);
      pagesArr.push("...");
      pagesArr.push(page.value - 1);
      pagesArr.push(page.value);
      pagesArr.push(page.value + 1);
      pagesArr.push("...");
      pagesArr.push(maxPage.value);
    }

    return pagesArr;
  }
});
</script>

<style scoped>
.pagination {
  background-color: #f1f5f9;
}
.pagination-button {
  cursor: pointer;
  padding: 0.8rem 1rem;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.pagination-button:disabled {
  cursor: auto;
  color: #94a3b8;
}

.pagination-button:disabled {
  cursor: auto;
}

.pagination-button:disabled.active-button {
  font-weight: 700;
  background-color: #334155;
  color: #fafaf9;
}
</style>
