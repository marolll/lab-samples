import Sample from "@/common/interfaces/models/sample";
import BaseResponse from "@/common/interfaces/response/base-response";

export interface SamplesResponse extends BaseResponse {
  data: Samples;
}

export interface SampleResponse extends BaseResponse {
  data: Sample;
}

interface Samples {
  recordCount?: number;
  currentPage?: number;
  maxRecords?: number;
  totalRecords?: number;
  data: Sample[];
}
