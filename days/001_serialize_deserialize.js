/**
 * implement serialize and deserialize
 *
 * lets say you were given with an array of strings, like ["i", "am", "tmh"]
 */

function ser(arr) {
  let res = "";

  for (let i of arr) {
    res += i.length + i;
  }
  return res;
}

function dSer(params) {
  let res = [];

  if (params.length > 2)
    while (params.length) {
      res.push(params.substring(1, +params[0] + 1));
      params = params.substring(+params[0] + 1);
    }
  console.log(params);
  return res;
}

console.log(dSer(ser(["i", "am", "tmh"])));
