/**
 *
 * check if target sum can be formed by adding numbers(as many times needed) in array
 *
 * @param {*} targetSum
 * @param {*} numbers
 * @returns
 */

function canSum(targetSum, numbers) {
  if (targetSum < 0) return false;
  if (targetSum === 0) {
    return true;
  }
  for (const num of numbers) {
    if (canSum(targetSum - num, numbers)) {
      return true;
    }
  }
  return false;
}

function howSum(targetSum, numbers, memo = {}) {
  if (targetSum < 0) return null;
  if (targetSum === 0) {
    return [];
  }
  if (targetSum in memo) return memo[targetSum];
  for (const num of numbers) {
    const result = howSum(targetSum - num, numbers, memo);
    if (result !== null) {
      result.push(num);
      memo[targetSum] = result;
      return result;
    }
  }
  memo[targetSum] = null;
  return null;
}

function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];
  if (targetSum in memo) return memo[targetSum];

  let shortCombo;
  for (const num of numbers) {
    let result = bestSum(targetSum - num, numbers, memo);
    if (result) {
      //   result.push(num);

      result = [num, ...result];
      if (!shortCombo || shortCombo.length > result.length) {
        shortCombo = result;
      }
    }
  }
  memo[targetSum] = shortCombo;
  return shortCombo;
}

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4, 3]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(26, [1, 2, 5, 25]));

console.log(bestSum(100, [1, 2, 5, 25]));

console.log(bestSum(300, [1, 2, 5, 25]));
