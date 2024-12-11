function getTotalX(a, b) {
  const lowBound = Math.max(...a);
  const highBound = Math.min(...b);

  let count = 0;

  for (let i = lowBound; i <= highBound + 1; i++) {
    let isValid = true;

    for (const x of a) {
      if (i % x !== 0) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      for (const y of b) {
        if (y % i !== 0) {
          isValid = false;
          break;
        }
      }
    }
    if (isValid) {
      count++;
    }
  }
  return count;
}

const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a, b));
