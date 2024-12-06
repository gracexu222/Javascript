const person = { name: "Alice", age: 30, city: "New York" };
const { name, age } = person;
console.log(name);
console.log(age);

const { name: fullName, age: yearsOld } = person;
console.log(fullName);
console.log(yearsOld);
