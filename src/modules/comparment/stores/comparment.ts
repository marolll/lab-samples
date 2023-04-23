import { defineStore } from "pinia";
import { ref } from "vue";
import { isOk } from "@/common/helpers/api";
import storageLayerService from "@/services/storage-layer-service";
import StorageLayer from "@/common/interfaces/models/storage-layer";
import sampleService from "@/services/sample-service";
import type Sample from "@/common/interfaces/models/sample";
// import axios from "axios";

export const useComparmentStore = defineStore("comparment", () => {
  // *******
  // STATES
  // *******
  const storageLayer = ref<StorageLayer | undefined>(undefined);
  const sample = ref<Sample | undefined>(undefined);
  // ********
  // ACTIONS
  // ********
  const fetchStorageLayer = async (id: number) => {
    const response = await storageLayerService.show({
      id: id,
    });

    if (isOk(response)) {
      storageLayer.value = response?.data;
    }
  };

  const fetchSample = async (id: number) => {
    const response = await sampleService.show({
      params: `$expand=location`,
      id: id,
    });

    if (isOk(response)) {
      sample.value = response?.data as Sample;
    }
  };

  // *******
  // RETURN
  // *******
  return { fetchStorageLayer, fetchSample, sample, storageLayer };
});
