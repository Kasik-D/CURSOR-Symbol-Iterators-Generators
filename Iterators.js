const myArray = [1, 2, 3, 4, 5];

for (let i of myArray) {
  console.log(i); // 1, 2, 3, 4, 5
}

const myString = "Hello World";

for (let i of myString) {
  console.log(i); // H, e, l, l, o, , W, o, r, l, d
}

const mySet = new Set([1, 2, 3, 4, 5]);

for (let i of mySet) {
  console.log(i); // 1, 2, 3, 4, 5
}

const myMap = new Map([
  [1, 2],
  [3, 4],
  [5, 6],
]);

for (let i of myMap) {
  console.log(i); // [1, 2], [3, 4], [5, 6]
}

// IIFE
(function () {
  for (let argument of arguments) {
    console.log(argument); // 1, 2, 3
  }
})(1, 2, 3);

function makeCustomIterator(array, additionValue) {
  let nextIndex = 0;

  return {
    [Symbol.iterator]: function () {
      return this;
    },
    next: function () {
      if (nextIndex < array.length) {
        return {
          value: array[nextIndex++] + additionValue,
          done: false,
        };
      }
      return {
        done: true,
        value: undefined,
      };
    },
  };
}

const customIterator = makeCustomIterator([1, 2, 3], 2);

console.log(customIterator.next()); // { value: 3, done: false }
console.log(customIterator.next()); // { value: 4, done: false }
console.log(customIterator.next()); // { value: 5, done: false }

const customIterator2 = makeCustomIterator([10, 20, 30], 2);

for (const iterator of customIterator2) {
  console.log(iterator); // 3, 4, 5
}
