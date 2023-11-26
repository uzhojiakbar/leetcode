// *===============
// *70. Climbing Stairs

// https://leetcode.com/problems/climbing-stairs/?envType=study-plan-v2&envId=dynamic-programming

var climbStairs = function (n) {
  let res = [1, 1];

  for (i = 2; i <= n; i++) {
    res.push(res[i - 1] + res[i - 2]);
    // console.log(i, "---", res[i - 1] + res[i - 2]);
  }
  return res[n];
};

// console.log(climbStairs(10));

// *===============
// *509. Fibonacci Number

// https://leetcode.com/problems/fibonacci-number/

const fib = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

console.log(fib(10));
