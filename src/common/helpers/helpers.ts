export const getNestedProp = (
  obj: any,
  field: string,
  emptyVal: string = ""
) => {
  // Split name.name1.name2 format
  const fieldArr = field.trim().toLowerCase().split(".");
  fieldArr.forEach((cur) => {
    if (obj) {
      obj = obj[cur];
    }
  });

  // Also zero would be ""=> This handler makes sure it will work
  if (obj === 0) return 0;

  return obj || emptyVal;
};

export default {
  getNestedProp,
};
