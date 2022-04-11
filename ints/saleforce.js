/**
 *
 *
 * given arr and threshold
 *
 * find the min sum possible by max from the subArrays of size <= threshold formed using given arr
 *
 *
 * [1,3,4,5,6,2]
 *
 * [[1,3,4],[5,6,2]] => 4+6 => 10
 *
 * 1
 * 3
 * 4
 * 6
 *
 *
 *
 *
 *
 * [[[1],[3],]
 */

// [1][[[1]]][(1, 2)][([[1, 2]], [[1], [2]])][(1, 2, 3)][
//   ([[1, 2, 3]], [[1], [2], [3]], [[1, 2], [3]], [[1], [2, 3]])
// ];

function sol2(arr, thre) {
  let store = [0];

  let currArray = [];

  let maxThreshArray = [];

  for (let i of arr) {
    if (currArray.length === thre) {
      currArray.shift();
    }
    currArray.push(i);
    maxThreshArray.push(Math.max(...currArray));
  }

  console.log(maxThreshArray);

  for (let i = 0; i < arr.length; i++) {
    if (currArray.length === thre) {
      currArray.shift();
    }
    currArray.push(arr[i]);
    currArray[i] = Math.max(...currArray);
  }

  return store[arr.length];
}

function possibleSubArrays(finalAns = [], arr, i = 0, ans = [], curr = []) {
  if (i <= arr.length) {
    console.log(possibleSubArrays(arr, i + 1, ans, [...curr, arr[i]]));
    ans.push(curr);
  }

  return ans;
}

// 123

// 1

// [
//     [[1],[2]],
//     [[1,2]]
// ]
// 1 2
// 12

// 1 2 3
// 12 3
// 1 23
// 123

// 1 2 3 4
// 12 3 4
// 1 23 4
// 1 2 34
// 123 4
// 12 34
// 1 234
// 1234

// console.log(sol([1, 2], 1));
console.log(sol([1, 2, 3], 2));

console.log(sol([1, 2, 3], 3));

console.log(sol([1, 3, 4, 3, 2, 0], 3));
var ans = [];
function sol(params, threshold) {
  helper(params, 0, [], threshold);

  // let sums = ans.map((i) => i.reduce((aa, cc) => aa + Math.max(...cc), 0));
  // console.log(sums);

  return ans;
}

function helper(arr, start, res, thresh) {
  if (start === arr.length) {
    ans = res;
    return;
  }
  if (res.length == 0) res = [[[arr[start]]]];
  else {
    for (let i of res) {
      console.log(i);
      for (let j of i) {
        if (j.length == thresh) {
          return;
        }
      }
    }
    let ans2 = res.map((a) => [...a, [arr[start]]]);
    let ans3 = res.map((a) => {
      a[a.length - 1] = [...a[a.length - 1], arr[start]];
      return a;
    });
    res = [...ans2, ...ans3];
  }
  helper(arr, start + 1, res, thresh);
}
