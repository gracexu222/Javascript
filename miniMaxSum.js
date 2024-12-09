function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);

  let min_sum = 0;
  let max_sum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    min_sum += arr[i];
  }
  for (let i = 1; i < arr.length; i++) {
    max_sum += arr[i];
  }
  return [min_sum, max_sum];
}

console.log(miniMaxSum([1, 9, 3, 4, 5]));
