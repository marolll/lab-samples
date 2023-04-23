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

interface SampleType {
  sampleTypeID: number;
  userID: number;
  groupID: number;
  name: string;
  backgroundColor: string;
  foregroundColor: string;
  showSectionsInTabs: boolean;
}
