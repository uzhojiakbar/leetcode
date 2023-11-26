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
  const Fibonacci = (f) => {
    console.log(f);
  };
  if (n == 1) {
    console.log(n);
  } else {
    Fibonacci(n);
  }
};

fib(1);
// 10 = 10-1 = 9 = 8 + 7 = 15
// 10 = 10-2 = 8 = 7 + 6 = 13

// 4 = 3
// 3 = 2
