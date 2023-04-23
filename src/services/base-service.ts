import ServiceParams from "@/common/interfaces/service/service-params";
import axios from "axios";

// General api service
export default class BaseService {
  // GET METHOD
  get = async <TResponse>({ path, params }: ServiceParams): Promise<any> => {
    try {
      let fullPath = path;
      params && (path += `?${params}`);
      const response = await axios.get<TResponse>(`${fullPath}`);
      return response;
    } catch (error) {
      return error;
    }
  };
}
