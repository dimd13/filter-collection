const inArray = (haystack, needle) => {
  return haystack.indexOf(needle) !== -1;
};

const pickBy = (object, haystack, predicate) => {
  return Object.keys(object).reduce((picked, key) => {
    if (predicate(haystack, key)) {
      picked[key] = object[key];
      return picked;
    }
    return picked;
  }, {});
};

const drop = (source, toDrop) => {
  return source.reduce((arr, value) => {
    arr.push(pickBy(value, toDrop, (haystack, needle) => !inArray(haystack, needle)));
    return arr;
  }, []);
};

const keep = (source, toKeep) => {
  return source.reduce((arr, value) => {
    arr.push(pickBy(value, toKeep, (haystack, needle) => inArray(haystack, needle)));
    return arr;
  }, []);
};

module.exports = { drop, keep };
