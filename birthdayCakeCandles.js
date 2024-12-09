function birthdayCakeCandles(candles) {
  let tallest = Math.max(...candles);
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === tallest) {
      count++;
    }
  }
  return count;
}
console.log(birthdayCakeCandles([2, 2, 3, 3, 1]));
