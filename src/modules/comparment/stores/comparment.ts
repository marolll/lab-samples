import { defineStore } from "pinia";
import { ref } from "vue";
import Sample from "@/common/interfaces/models/sample";
import { isOk } from "@/common/helpers/api";
import storageLayerService from "@/services/storage-layer-service";
// import axios from "axios";

export const useComparmentStore = defineStore("comparment", () => {
  // *******
  // STATES
  // *******
  const storageLayer = ref<Sample[]>([]);

  // ********
  // ACTIONS
  // ********
  const fetchStorageLayer = async (id: number) => {
    const response = await storageLayerService.show({
      id: id,
    });

    if (isOk(response)) {
      console.log("RESPONSE:", response);
      //   storageLayer.value = response?.data?.data;
      //   setTotalRecords({
      //     value: response?.data?.totalRecords?.toString(),
      //   });
    }
  };

  // *******
  // RETURN
  // *******
  return { fetchStorageLayer, storageLayer };
});
