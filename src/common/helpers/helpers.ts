export const getNestedProp = (
  obj: any,
  field: string,
  emptyVal: string = ""
) => {
  // Split name.name1.name2 format
  const fieldArr = field.trim().split(".");
  fieldArr.forEach((cur) => {
    if (obj) {
      obj = obj[cur];
    }
  });

  // Zero and false is possible return, empty would be empty placeholder
  if (obj === 0 || obj === false) return obj;

  return obj || emptyVal;
};

export const getDateStr = (dateToConvert: any) => {
  if (!isValidDate(new Date(dateToConvert))) return "";

  const inputDate = new Date(dateToConvert);
  let date, month, year;

  date = inputDate.getDate();
  month = inputDate.getMonth() + 1; // Months starting with zero
  year = inputDate.getFullYear();

  date = date.toString().padStart(2, "0");

  month = month.toString().padStart(2, "0");

  return `${date}-${month}-${year}`;
};

export const isValidDate = (d: any) => {
  return d instanceof Date && !isNaN(d as any);
};

export default {
  getNestedProp,
  getDateStr,
  isValidDate,
};
