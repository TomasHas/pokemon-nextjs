export const calculateZeros = (id) => {
  if (id > 0 && id < 10) {
    return "000".concat(id);
  } else if (id > 1 && id < 100) {
    return "00".concat(id);
  }
  if (id >= 100 && id < 1000) {
    return "0".concat(id);
  }
  if (id > 1000 && id < 10000) {
    return "".concat(id);
  }
};
