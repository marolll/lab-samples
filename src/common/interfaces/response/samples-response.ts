import Sample from "@/common/interfaces/models/sample";
import BaseResponse from "@/common/interfaces/response/base-response";

export default interface SamplesResponse extends BaseResponse {
  data: Samples;
}

interface Samples {
  recordCount: number;
  currentPage: number;
  maxRecords: number;
  totalRecords: number;
  data: Sample[];
}
