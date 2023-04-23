import ServiceParams from "@/common/interfaces/service/service-params";
import axios from "axios";

// General api service
export default class BaseService {
  // GET METHOD
  get = async <TResponse>({ path, params }: ServiceParams): Promise<any> => {
    try {
      let fullPath = path;
      params && (fullPath += `?${params}`);
      const response = await axios.get<TResponse>(`${fullPath}`);
      console.log("GET RESPONSE:", response);
      return response;
    } catch (error) {
      return error;
    }
  };
}
