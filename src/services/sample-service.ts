import {
  SampleResponse,
  SamplesResponse,
} from "@/common/interfaces/response/sample-response";
import ServiceParams from "@/common/interfaces/service/service-params";

import BaseService from "@/services/base-service";
import { apiPath } from "@/config";

const name: string = "samples";

// CLASS SERVICE
class SampleService extends BaseService {
  // INDEX METHOD - SHOW ALL
  index = async ({ params }: ServiceParams): Promise<SamplesResponse> => {
    const path = `${apiPath}/${name}`;
    const response = await this.get({ path: path, params: params });

    return response;
  };

  show = async ({ params, id }: ServiceParams): Promise<SampleResponse> => {
    const path = `${apiPath}/${name}/${id}`;
    const response = await this.get({ path: path, params: params });
    return response;
  };
}

const sampleService = new SampleService();
export default sampleService;
