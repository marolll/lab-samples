import SamplesResponse from "@/common/interfaces/response/samples-response";
import ServiceParams from "@/common/interfaces/service/service-params";
import BaseService from "@/services/base-service";
import { apiPath } from "@/config";

const name: string = "storageLayers";

// CLASS SERVICE
class StorageLayerService extends BaseService {
  // INDEX METHOD - SHOW ALL
  show = async ({ params, id }: ServiceParams): Promise<SamplesResponse> => {
    const indexPath = `${apiPath}/${name}/${id}`;
    const response = await this.get({ path: indexPath, params: params });
    return response;
  };
}

const storageLayerService = new StorageLayerService();
export default storageLayerService;
