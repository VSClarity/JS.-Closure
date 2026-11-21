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
