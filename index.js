// EXAMPLE 1 - Remove Null or Undefined Values from an Object

// ✅ Remove null values from an object
const obj = {
  one: null,
  two: 2,
  three: null,
};

Object.keys(obj).forEach(key => {
  if (obj[key] === null) {
    delete obj[key];
  }
});

console.log(obj); // 👉️ {two: 2}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove the `null` and `undefined` values from a nested object

// // ✅ Remove all `null` and `undefined` values from a nested object
// const obj = {
//   one: null,
//   two: 2,
//   three: {
//     four: 4,
//     five: null,
//     six: undefined,
//   },
// };

// function removeNull(obj) {
//   return Object.fromEntries(
//     Object.entries(obj)
//       .filter(([_, value]) => value != null)
//       .map(([key, value]) => [
//         key,
//         value === Object(value) ? removeNull(value) : value,
//       ]),
//   );
// }

// const result = removeNull(obj);

// // 👇️ { two: 2, three: { four: 4 } }
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove the `null` and `undefined` values from an object using `reduce()`

// const obj = {
//   one: null,
//   two: 2,
//   three: null,
//   four: null,
//   five: 5,
//   six: undefined,
// };

// const newObj = Object.keys(obj).reduce((accumulator, key) => {
//   if (obj[key] != null) {
//     accumulator[key] = obj[key];
//   }

//   return accumulator;
// }, {});

// // 👇️ { two: 2, five: 5 }
// console.log(newObj);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove the `null` and `undefined` values from an object using a `for...in` loop

// const obj = {
//   one: null,
//   two: 2,
//   three: null,
//   four: undefined,
// };

// for (const key in obj) {
//   if (obj[key] == null) {
//     delete obj[key];
//   }
// }

// console.log(obj); // 👉️ {two: 2}
