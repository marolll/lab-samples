export const isOk = (response: any) => {
  if (response && response.status) {
    return response.status.toString().startsWith("20");
  }
  return false;
};

export default { isOk };
