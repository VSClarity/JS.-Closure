// 1

function createAdder(start) {
  let sum = start;

  return function (value) {
    sum += value;
    return sum;
  };
}

const adder = createAdder(10);
console.log(adder(13)); // 23
console.log(adder(20)); // 43
console.log(adder(100)); // 143

const adder2 = createAdder(100);
console.log(adder2(13)); // 113
console.log(adder2(100)); // 213

