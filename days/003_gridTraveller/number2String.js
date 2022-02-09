function getSol(num) {
  let numMap = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    100: "hundred",
    1000: "thousand",
    100000: "lakh",
    10000000: "crore",
  };

  let x = 1;
  let ans = "";

  if (num > 999) {
    ans = getSol(num % 1000);
    ans = get;
  }
  while (num > 0) {
    let temp = num % 100;
  }
  return ans;
}

console.log(getSol(1));
