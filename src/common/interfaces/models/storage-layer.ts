export default interface StorageLayer {
  barcode: string;
  created: string;
  dimension: Dimension;
  icon: string;
  isGrid: boolean;
  maxSize: number;
  name: string;
  parentStorageLayerID: number;
  position: number;
  storageID: number;
  storageLayerDefinitionID: number;
  storageLayerID: number;
  transposed: boolean;
  userID: number;
}

interface Dimension {
  columns: DimensionChild;
  rows: DimensionChild;
}

interface DimensionChild {
  count: 1;
  numbering: string;
}
