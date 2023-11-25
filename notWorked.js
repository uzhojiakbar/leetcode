// *==============*
// *20. Valid Parentheses - solution, Sardorbek Mukhtorov
var isValid = function (s) {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") res.push(")");
    else if (s[i] === "[") res.push("]");
    else if (s[i] === "{") res.push("}");
    else if (res.pop() !== s[i]) {
      return false;
    }
  }
  return !res.length;
};

console.log(isValid("([)]"));
