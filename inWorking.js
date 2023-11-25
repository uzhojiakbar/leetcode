// *==============*
// !20. Valid Parentheses
const isValid = (s) => {
  //   let valid = ["(", ")", "{", "}", "[", "]"];

  let volid = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let logical;
  for (let i = 0; i < s.length; i++) {
    for (let j in volid) {
      if (s[i] == j) {
        if (s.slice(i + 1, s.length + 1).includes(volid[j])) {
          logical = true;
          continue;
        } else {
          logical = false;
          break;
        }
      } else {
        continue;
      }
    }
  }
  console.log(logical);
};

isValid("()()()");
