import Sample from "@/common/interfaces/api/sample";

export default interface Samples {
  recordCount: number;
  currentPage: number;
  maxRecords: number;
  totalRecords: number;
  data: Sample[];
}
