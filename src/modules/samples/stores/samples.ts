// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { ref } from "vue";
import Sample from "@/common/interfaces/api/sample";
import { isOk } from "@/common/helpers/api";
import sampleService from "@/services/sample-service";
import { usePagination } from "@/common/composables/pagination";

// const service = new InvoiceService();
export const useSamplesStore = defineStore("samples", () => {
  // ************
  // STATES
  // ************
  const samples = ref<Sample[]>([]);

  // Reusable pagination composable with fetch effect to reduce code amount
  const { setPage, setTotalRecords } = usePagination({
    callback: fetchSamples,
  });

  async function fetchSamples() {
    const response = await sampleService.index();

    if (isOk(response)) {
      samples.value = response?.data;
      setTotalRecords(response.totalRecords);
    }
  }

  // ********
  // RETURN
  // ********
  return { setPage, fetchSamples, samples };
});
