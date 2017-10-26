// Node packages

const capitalize = (str) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  return '';
};

const forEach = (arr, func, callback, i) => {
  if (typeof i === 'undefined') i = 0;
  if (arr[i]) {
    func(arr[i], () => {
      forEach(arr, func, callback, i + 1);
    });
  } else {
    callback(false);
  }
};

// sort object on field
const objectSort = (arr, field) => {
  if (arr && arr != null && arr.length > 0) {
    return arr.sort((a, b) => {
      if (a[field] < b[field]) { return 1; }
      if (a[field] > b[field]) { return -1; }
      return 0;
    });
  }
  return arr;
};

const median = (array) => {
  const arr = array.sort();
  if (arr && arr.length > 1) {
    const x = (arr.length / 2).toFixed(0);
    return arr[x];
  }
  return arr[0];
};

module.exports = {
  median,
  objectSort,
  forEach,
  capitalize,
};
