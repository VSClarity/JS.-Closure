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