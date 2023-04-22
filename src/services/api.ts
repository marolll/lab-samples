import axios from "axios";

// General api service
class Api {
  // GET METHOD
  get = async <TResponse>(path: string, options: {} = {}): Promise<any> => {
    try {
      const response = await axios.get<TResponse>(path, options);
      return response;
    } catch (error) {
      return error;
    }
  };

  // IS OK METHOD
  isOk = (response: any) => {
    if (response && response.status) {
      return response.status.toString().startsWith("20");
    }
    return false;
  };
}

export const api = new Api();

export default api;
