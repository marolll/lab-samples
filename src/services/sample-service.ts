import api from "@/services/api";
import Samples from "@/common/interfaces/samples";

// NAME
const name = "samples";
// const singularName = "batch";

// CLASS SERVICE
class SampleService {
  // INDEX METHOD - SHOW ALL
  index = async (): Promise<Samples> => {
    return await api.get(name);
  };
}

const sampleService = new SampleService();
export default sampleService;
