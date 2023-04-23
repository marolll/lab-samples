import { defineStore } from "pinia";
import { ref } from "vue";
import Sample from "@/common/interfaces/models/sample";
import { isOk } from "@/common/helpers/api";
import sampleService from "@/services/sample-service";
import { usePagination } from "@/common/composables/pagination";

export const useSamplesStore = defineStore("samples", () => {
  // *******
  // STATES
  // *******
  const samples = ref<Sample[]>([]);
  const { setPage, setTotalRecords, pagination, paginationParams } =
    usePagination({
      callback: () => fetchSamples(),
    });

  // ********
  // ACTIONS
  // ********
  async function fetchSamples() {
    const response = await sampleService.index({
      params: `${paginationParams.value}&$expand=location`,
    });

    if (isOk(response)) {
      samples.value = response?.data?.data;
      setTotalRecords({
        value: response?.data?.totalRecords?.toString(),
      });
    }
  }

  // *******
  // RETURN
  // *******
  return { setPage, pagination, fetchSamples, samples };
});
