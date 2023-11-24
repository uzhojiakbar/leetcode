// *==============*

// *9. Palindrome Number
// var isPalindrome = function (x) {
//   let strX = x.toString();
//   strX = strX.split("").reverse().join("");

//   console.log(strX == x);
//   //   return strX == x;
// };

// isPalindrome(1221);

// *==============*
// *13. Roman to Integer
// var romanToInt = function (s) {
//   const RimRaqam = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let res = 0;
//   for (i = 0; i < s.length; i++) {
//     if (RimRaqam[s[i]] > RimRaqam[s[i - 1]]) {
//       res += RimRaqam[s[i]] - RimRaqam[s[i - 1]] - RimRaqam[s[i - 1]];
//     } else {
//       res += RimRaqam[s[i]];
//     }
//   }
//   console.log(res);
// };

// romanToInt("MCMXCIV");

// *==============*

// ! 2506. Count Pairs Of Similar Strings
// var similarPairs = function (words) {
//   //   console.log(words);
//   count = 0;
//   for (let i = 0; i <= words.length - 1; i++) {
//     let var1 = true;
//     for (let j = 0; j < words[i].length; j++) {
//       if (!words[0].includes(words[i][j])) {
//         var1 = false;
//         break;
//       }
//     }
//     var1 === true ? count++ : (count += 0);
//   }
//   if (count == 1) {
//     count = 0;
//   }
//   console.log(count);
// };
// similarPairs(["aba", "aabb", "asdasdasdcle", "bac", "aabc"]);
// similarPairs(["aabb", "ab", "ba"]);
// similarPairs(["nba", "cba", "dba"]);
// similarPairs([
//   "dcedceadceceaeddcedc",
//   "dddcebcedcdbaeaaaeab",
//   "eecbeddbddeadcbbbdbb",
//   "decbcbebbddceacdeadd",
//   "ccbddbaedcadedbcaaae",
//   "dddcaadaceaedcdceedd",
//   "bbeddbcbbccddcaceeea",
//   "bdabacbbdadabbbddaea",
// ]);

// *==============*
// *14. Longest Common Prefix

// const longestCommonPrefix = (strs) => {
//   checkingStr = strs[0];
//   oxshashlik = [];
//   for (let i = 1; i < strs.length; i++) {
//     str1 = "";
//     for (let j = 0; j < strs[i].length; j++) {
//       if (checkingStr[j] == strs[i][j]) {
//         str1 += checkingStr[j];
//       } else {
//         break;
//       }
//     }
//     oxshashlik.push(str1.length);
//     str1 = "";
//   }
//   let min = Math.min(...oxshashlik);
//   console.log(checkingStr.slice(0, min));
// };

// longestCommonPrefix(["flower", "flow", "flight"]);
// longestCommonPrefix(["dog", "racecar", "car"]);
// longestCommonPrefix(["cir", "car"]);

// *345. Reverse Vowels of a String
// var reverseVowels = function (s) {
//   let vowels = [];
//   let text = "";
//   let res = "";

//   // GET VOWELS
//   for (let i = 0; i < s.length; i++) {
//     if (
//       s[i].toLowerCase() == "a" ||
//       s[i].toLowerCase() == "e" ||
//       s[i].toLowerCase() == "i" ||
//       s[i].toLowerCase() == "o" ||
//       s[i].toLowerCase() == "u"
//     ) {
//       vowels.push(s[i]);
//       text += "[";
//     } else {
//       text += s[i];
//     }
//   }

//   vowels.reverse();

//   // REVERSE VOWELS
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] == "[") {
//       res += vowels[0];
//       vowels.splice(0, 1);
//     } else {
//       res += text[i];
//     }
//   }

//   console.log(res);
// };

// reverseVowels("hello");
// reverseVowels("salom");
// reverseVowels(".a");
// reverseVowels("a.");
