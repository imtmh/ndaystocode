function bestSum(toSum, fromArray) {
  let table = Array(toSum + 1).fill(null);

  table[0] = [];
  let i = 0;
  for (let t of table) {
    for (let f of fromArray) {
      if (table[i] && toSum >= i + f) {
        const shortOne = [...table[i], f];
        if (!table[+i + +f] || table[+i + +f].length > shortOne.length) {
          table[+i + +f] = shortOne;
        }
      }
    }
    i++;
  }
  return table[toSum];
}

console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4, 3]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(26, [1, 2, 5, 25]));

console.log(bestSum(100, [1, 2, 5, 25]));

console.log(bestSum(300, [1, 2, 5, 25]));
