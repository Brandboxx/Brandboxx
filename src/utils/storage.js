export const getStorage = (itemKey) => {
  try {
    let value = localStorage.getItem(itemKey);
    if (value) return JSON.parse(value);
    else return {};
  } catch (error) {
    return {};
  }
};
export const setStorage = (itemKey, data) => {
  localStorage.setItem(itemKey, JSON.stringify(data));
};
export const clearStorage = () => {
  localStorage.clear();
};
