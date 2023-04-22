import SampleType from "@/common/interfaces/api/sample-type";

export default interface Sample {
  owner: string;
  archived: boolean;
  meta: string[];
  sampleID: number;
  created: string;
  userID: number;
  creatorID: number;
  storageLayerID: number;
  position: number;
  barcode: string;
  sampleType: SampleType;
  sampleTypeID: number;
  checkedOut: boolean;
  parentSampleID: number;
  name: string;
  description: string;
  note: string;
}
