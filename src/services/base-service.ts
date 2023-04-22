import axios from "axios";

// General api service
export default class BaseService {
  // GET METHOD
  get = async <TResponse>(path: string, options: {} = {}): Promise<any> => {
    try {
      const response = await axios.get<TResponse>(path, options);
      console.log("GET RESPONSE:", response);
      return response;
    } catch (error) {
      return error;
    }
  };
}
