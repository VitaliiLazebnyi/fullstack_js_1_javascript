module.exports = (arr) => {
  if (!Array.isArray(arr)) {
    return {
      count: 0,
      sum: 0,
    };
  }

  let counter = 0;
  let sum = 0;

  arr.forEach(
      (el) => {
        if (el > 0) {
          sum += el;
          counter += 1;
        }
      },
  );

  return {
    count: counter,
    sum: sum,
  };
};
