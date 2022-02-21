function canConstruct(str, arr, memo = {}) {
  if (str == "") {
    return true;
  }

  if (str in memo) return memo[str];
  for (let a of arr) {
    if (str.indexOf(a) === 0) {
      if (canConstruct(str.slice(a.length), arr, memo)) {
        memo[str] = true;
        return true;
      }
    }
  }
  memo[str] = false;
  return false;
}

function howConstruct(str, arr, memo = {}) {
  if (str == "") {
    return [];
  }

  if (str in memo) return memo[str];
  for (let a of arr) {
    if (str.indexOf(a) === 0) {
      const constructedBy = howConstruct(str.slice(a.length), arr, memo);
      if (constructedBy) {
        memo[str] = [a, ...constructedBy];
        return memo[str];
      }
    }
  }
  memo[str] = null;
  return null;
}

function bestConstruct(str, arr, memo = {}) {
  if (str == "") {
    return [];
  }

  if (str in memo) return memo[str];
  let shortAns;
  for (let a of arr) {
    if (str.indexOf(a) === 0) {
      let constructedBy = bestConstruct(str.slice(a.length), arr, memo);

      constructedBy = [a, ...constructedBy];
      if (constructedBy) {
        if (!shortAns || shortAns.length > constructedBy.length) {
          shortAns = constructedBy;
        }
      }
    }
  }
  memo[str] = shortAns;
  return shortAns;
}

console.log(bestConstruct("abcdef", ["ab", "cd", "abc", "def", "ef"]));
console.log(
  bestConstruct(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ["a", "aa", "aaa", "aaaa", "aaaaa"]
  )
);
