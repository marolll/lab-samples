export default interface TableField {
  header: string;
  field: string;
  type: "date" | "text" | "boolean";
  disabled?: boolean;
  boolean?: {
    true_val: string;
    false_val: string;
  };
}
