var findWordsContaining = function (words, x) {
  let res = [];
  words.map((v, i) => {
    if (v.includes(x)) {
      res.push(i);
    }
  });
  console.log(res);
};

findWordsContaining(["aaaaa", "abc", "aaaa", "cbc"], "a");
