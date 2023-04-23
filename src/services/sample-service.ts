import SamplesResponse from "@/common/interfaces/response/samples-response";
import ServiceParams from "@/common/interfaces/service/service-params";

import BaseService from "@/services/base-service";
import { apiPath } from "@/config";

const name: string = "samples";

// CLASS SERVICE
class SampleService extends BaseService {
  // INDEX METHOD - SHOW ALL
  index = async ({ params }: ServiceParams): Promise<SamplesResponse> => {
    const indexPath = `${apiPath}/${name}`;
    const response = await this.get({ path: indexPath, params: params });
    return response;
  };
}

const sampleService = new SampleService();
export default sampleService;
