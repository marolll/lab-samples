import BaseResponse from "@/common/interfaces/response/base-response";
import StorageLayer from "@/common/interfaces/models/storage-layer";

export default interface StorageLayerResponse extends BaseResponse {
  data: StorageLayer;
}
