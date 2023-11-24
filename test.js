// var reverseVowels = function (s) {
// let vowels = [];
// let text = "";
// let res = "";

// // GET VOWELS
// for (let i = 0; i < s.length; i++) {
//   if (
//     s[i].toLowerCase() == "a" ||
//     s[i].toLowerCase() == "e" ||
//     s[i].toLowerCase() == "i" ||
//     s[i].toLowerCase() == "o" ||
//     s[i].toLowerCase() == "u"
//   ) {
//     vowels.push(s[i]);
//     text += "[";
//   } else {
//     text += s[i];
//   }
// }

// vowels.reverse();

// // REVERSE VOWELS
// for (let i = 0; i < text.length; i++) {
//   if (text[i] == "[") {
//     res += vowels[0];
//     vowels.splice(0, 1);
//   } else {
//     res += text[i];
//   }
// }

//   return res;
//   //   vowels.splice(0, 1);
//   //   console.log(res);
// };

// reverseVowels(".");
