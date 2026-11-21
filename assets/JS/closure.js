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

// 2

function createLogger(prefix) {
  return function (message) {
    console.log(`${prefix}: ${message}`);
  };
}

const authLogger = createLogger("AUTH");
const apiLogger = createLogger("API");

authLogger("User logged in"); // AUTH: User logged in
apiLogger("Request failed"); // API: Request failed

// 3
function createLimiter(limit) {
  let countLimit = 0;
  return function () {
    if (countLimit < limit) {
      countLimit++;
      return "ok";
    } else {
      return "Limit exceeded,ERROR";
    }
  };
}
const limited = createLimiter(2);

console.log(limited()); // "ok"
console.log(limited()); // "ok"
console.log(limited()); // "Error"
