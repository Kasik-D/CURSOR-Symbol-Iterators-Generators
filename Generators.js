function* counter() {
  let count = 0;
  while (true) {
    yield count++;
  }
}

const counterGenerator = counter();

// console.log(counterGenerator.next()); // { value: 0, done: false }
// console.log(counterGenerator.next()); // { value: 1, done: false }
// console.log(counterGenerator.return()); // { value: undefined, done: true }
// console.log(counterGenerator.next()); // { value: 2, done: false }

function* superCounter() {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
}


const superCounterGenerator = superCounter();

// console.log(superCounterGenerator.next()); // { value: 1, done: false }
// console.log(superCounterGenerator.next()); // { value: 2, done: false }
// console.log(superCounterGenerator.next()); // { value: 3, done: false }
// console.log(superCounterGenerator.next()); // { value: 4, done: false }

function* fibonacci() {
  var fn1 = 1;
  var fn2 = 1;
  while (true) {
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    console.log("current", current);
    var reset = yield current;
    console.log("reset", reset);
    if (reset) {
      console.log("resetting");
      fn1 = 1;
      fn2 = 1;
    }
  }
}

var sequence = fibonacci();

// console.log(sequence.next().value);
// console.log(sequence.next(true).value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);

function* foo() {
  let index = 0;
  while (index <= 2) {
    yield index++;
  }
}

const iterator = foo();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

async function* asyncGenerator() {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
  yield 1;
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
  yield 2;
}

const asyncIterator = asyncGenerator();

async function consumeAsyncGenerator() {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
}

consumeAsyncGenerator();



consumeAsyncGenerator2();