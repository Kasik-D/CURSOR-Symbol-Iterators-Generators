const title = Symbol("title");
const author = Symbol("author");

const myBook = {
  [Symbol("title")]: "The Lord of the Rings",
  [Symbol("title")]: "The Hobbit",
  [author]: "J.R.R. Tolkien",
};

const property = Object.getOwnPropertySymbols(myBook)[0];
const property2 = Object.getOwnPropertySymbols(myBook)[1];
// console.log(myBook[property], myBook[property2]);

const myBook2 = {
  title: "The Lord of the Rings",
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
};

// console.log(myBook2.title, myBook2.author);

/////////////////////////////////////////////

const customAlphabets = {
  start: "a",
  end: "o",

  0: "a",
  1: "0",
  length: 2,

  [Symbol.iterator]: function () {
    let current = this.start.charCodeAt(0);
    const end = this.end.charCodeAt(0);
    return {
      next() {
        if (current <= end) {
          const value = String.fromCharCode(current);
          current++;
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },

  [Symbol.toStringTag]: "Alphabet",

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return `${this.start} -> ${this.end}`;
    }
    if (hint === "number") {
      return this.start.charCodeAt(0) + this.end.charCodeAt(0);
    }
    if (hint === "default") {
      return "default";
    }
    return null;
  },

  [Symbol.isConcatSpreadable]: true,

  //  [Symbol.unscopables]: true
  //  [Symbol.search]: function () {}
  // [Symbol.replace]: function () {},
  // [Symbol.match]: function () {},
  // [Symbol.split]: function () {},
  // [Symbol.hasInstance]: function () {},
  // [Symbol.species]: function () {},
};

// for (let i of customAlphabets) {
//   console.log(i);
// }

// console.log(customAlphabets.toString());

console.log(["a", "b"].concat(customAlphabets));
