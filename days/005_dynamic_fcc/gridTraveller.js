/**
 * find number of ways to travel in a grid of size m*n
 *
 * solved using memoization
 *
 *
 * @param {grid size} m
 * @param {*} n
 * @param {*} memo
 * @returns
 */

function gridTraveller(m, n, memo = {}) {
  if (m <= 1 || n <= 1) {
    return 1;
  }

  if (m > n) {
    return gridTraveller(n, m, memo);
  }

  let key = m + "_" + n;
  if (!(key in memo)) {
    memo[key] = gridTraveller(m, n - 1, memo) + gridTraveller(m - 1, n, memo);
  }
  return memo[key];
}

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(2, 2));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(18, 18));
