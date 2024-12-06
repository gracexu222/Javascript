const numbers = [10, 20, 30, 40, 50];
// for .. loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// forEach Method
numbers.forEach((i) => console.log(i));
numbers.forEach(function (i) {
  console.log(i);
});

// i for numbers "in" method indicate the index of numbers
for (let i in numbers) {
  console.log(i);
}
