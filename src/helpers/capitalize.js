export const capitalize = (arr) => {
  return arr.map((str) => {
    const modifyStr = str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
    return modifyStr;
  });
};
