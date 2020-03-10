/**
 *Ensures that all values from a given array are unique
 * @returns An array containing the unique values
 * @param {Array} array
 */
export const uniqueRoutes = array => {
  //check if param is array
  if (!Array.isArray(array)) {
    return;
  }

  const s = new Set();
  const a = [];

  array.forEach(itm => {
    //check if Set does not have the value, then add them to Set and the array to be returned
    if (!s.has(itm.path)) {
      s.add(itm.path);
      a.push(itm);
    }
  });

  return a;
};

export const uniqArray = array => {
  //check if param is array
  if (!Array.isArray(array)) {
    return;
  }

  const s = new Set();
  const a = [];

  array.forEach(itm => {
    //check if Set does not have the value, then add them to Set and the array to be returned
    if (!s.has(itm)) {
      s.add(itm);
      a.push(itm);
    }
  });

  return a;
};

export const isDate = input => {
  if (Object.prototype.toString.call(input) === "[object Date]") return true;
  return false;
};

export const isFunction = value =>
  value &&
  (Object.prototype.toString.call(value) === "[object Function]" ||
    "function" === typeof value ||
    value instanceof Function);

export const cleanupLocalStorage = () => {
  console.log("Cleanup localstorage...");
  localStorage.removeItem(DO_NOT_FORGET_TO_SET);
  console.log(`Removed ${DO_NOT_FORGET_TO_SET}`);
};

export const setupLocalStorage = data => {
  console.log("Setup localstorage...");
  localStorage.setItem(DO_NOT_FORGET_TO_SET, "Dummy");
};
