const user = {
  id: 1,
  username: "jdoe",
  email: "jdoe@example.com",
  password: "secret",
};
//function will be parentheses, with object curly brackets{}
// function Person_info({ id, username, ...manyMoreArgs }) {
//   console.log("id", id);
//   console.log("username", username);
//   console.log("manyMoreArgs", manyMoreArgs);
// }
// Person_info(user);
const { id, username, ...detail } = user;
console.log(id);
console.log(username);
console.log(detail);
