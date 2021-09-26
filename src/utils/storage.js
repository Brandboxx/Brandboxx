export const getStorage = (itemKey) => {
  try {
    let value = sessionStorage.getItem(itemKey);
    if (value) return JSON.parse(value);
    else return {};
  } catch (error) {
    return {};
  }
};
export const setStorage = (itemKey, data) => {
  sessionStorage.setItem(itemKey, JSON.stringify(data));
};
export const clearStorage = () => {
  sessionStorage.clear();
};
