// Regular way to write a method
// const myMath = {
//   PI: 3.14159,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };
// Shorthand way to write a method
const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};
// Mysterious Keyword "THIS"
//
const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log("THIS IS", this);
    console.log(`${this.name} says MEOWWW`);
  },
};

const meow2 = cat.meow;
