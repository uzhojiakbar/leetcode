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

// console.log(fib(10));

// *===============
// *1137. N-th Tribonacci Number

// https://leetcode.com/problems/n-th-tribonacci-number/?envType=study-plan-v2&envId=dynamic-programming
const cache = [0, 1, 1];

var tribonacci = function (n) {
  console.log(cache);
  if (cache[n] === undefined) {
    cache[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
  }
  return cache[n];
};

// console.log(tribonacci(25));

// *===============
// *198. House Robber

// https://leetcode.com/problems/house-robber/submissions/?envType=study-plan-v2&envId=dynamic-programming
const rob = (nums = []) => {
  let a = nums[0];
  let b = nums[1] ?? 0;
  let c = a + (nums[2] ?? 0);
  for (let i = 3; i < nums.length; i++) {
    [a, b, c] = [b, c, Math.max(a, b) + nums[i]];
  }
  return Math.max(b, c);
};

console.log(rob([1, 3, 1]));
