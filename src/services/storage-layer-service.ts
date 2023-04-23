import ServiceParams from "@/common/interfaces/service/service-params";
import BaseService from "@/services/base-service";
import { apiPath } from "@/config";
import StorageLayerResponse from "@/common/interfaces/response/storage-layer-response";

const name: string = "storageLayers";

// CLASS SERVICE
class StorageLayerService extends BaseService {
  // INDEX METHOD - SHOW ALL
  show = async ({
    params,
    id,
  }: ServiceParams): Promise<StorageLayerResponse> => {
    const path = `${apiPath}/${name}/${id}`;
    const response = await this.get({ path: path, params: params });
    return response;
  };
}

const storageLayerService = new StorageLayerService();
export default storageLayerService;
