import Samples from "@/common/interfaces/api/samples";
import BaseService from "@/services/base-service";

// NAME
const name = "api/v1/samples";

// CLASS SERVICE
class SampleService extends BaseService {
  // INDEX METHOD - SHOW ALL
  index = async (): Promise<Samples> => {
    const response = await this.get(name);

    return response;
  };
}

const sampleService = new SampleService();
export default sampleService;
