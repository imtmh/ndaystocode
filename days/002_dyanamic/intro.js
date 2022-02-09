const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

const fib2 = (n) => {
  let i = 1,
    k = 3;
  let ans = 1;
  while (k <= n) {
    k++;
    ans = ans + i;
    i = ans - i;
  }
  return ans;
};
console.log(fib2(10));

console.log(fib2(20));
console.log(fib2(50));

function timer(cb) {
  return function name(params) {};
  console.time("test");
  cb;
}
