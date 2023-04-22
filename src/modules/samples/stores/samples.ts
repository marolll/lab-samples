// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { ref } from "vue";
import Sample from "@/common/interfaces/api/sample";
import { isOk } from "@/common/helpers/api";
import sampleService from "@/services/sample-service";

// const service = new InvoiceService();
export const useSamplesStore = defineStore("samples", () => {
  // ************
  // STATES
  // ************
  const samples = ref<Sample[]>([]);

  const fetchSamples = async () => {
    const response = await sampleService.index();

    if (isOk(response)) {
      samples.value = response?.data;
    }
  };

  // **************
  // RETURN
  // **************
  return { fetchSamples, samples };
});
