function getPaths(arr, map = {}) {
  if (arr[0] == 1 || arr[1] == 1) return 1;
  if (arr[0] == 0 || arr[1] == 0) return 0;
  //   console.log(arr);
  if (arr[0] < arr[1]) {
    if (map[arr[0] + "_" + arr[1]]) {
      return map[arr[0] + "_" + arr[1]];
    }

    map[arr[0] + "_" + arr[1]] =
      getPaths([arr[0] - 1, arr[1]], map) + getPaths([arr[0], arr[1] - 1], map);
    return map[arr[0] + "_" + arr[1]];
  } else if (arr[0] > arr[1]) {
    if (map[arr[1] + "_" + arr[0]]) {
      return map[arr[1] + "_" + arr[0]];
    }
    map[arr[1] + "_" + arr[0]] =
      getPaths([arr[1] - 1, arr[0]], map) + getPaths([arr[1], arr[0] - 1], map);
    return map[arr[1] + "_" + arr[0]];
  } else {
    map[arr[0] + "_" + arr[1]] = 2 * getPaths([arr[0] - 1, arr[1]]);
    return map[arr[0] + "_" + arr[1]];
  }
}

console.log(getPaths([2, 2]));
console.log(getPaths([3, 3]));
console.log(getPaths([4, 4]));
console.log(getPaths([5, 5]));
console.log(getPaths([6, 6]));
console.log(getPaths([7, 7]));
