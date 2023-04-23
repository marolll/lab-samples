export default interface Pagination {
  page: string;
  records: string;
  totalRecords: string;
}

export interface PaginationSetParams {
  value: any;
  isCallback?: boolean;
}
