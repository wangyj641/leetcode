/*
* 5.最长回文子串 
* 给你一个字符串 s，找到 s 中最长的回文子串。
* 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。
*  
* 示例 1：
* 输入：s = "babad"
* 输出："bab"
* 解释："aba" 同样是符合题意的答案。
* 示例 2：
* 输入：s = "cbbd"
* 输出："bb"
*  
* 提示：
* 	1 <= s.length <= 1000
* 	s 仅由数字和英文字母组成
* 
*/


// @QUESTION_START
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  console.log('------------------------------');
  console.log(s);
  const len = s.length;

  if (len === 1) {
    return s;
  }

  if (len === 2) {
    if (s[0] === s[1]) {
      return s;
    } else {
      return s[0];
    }
  }

  var dp = Array(len).fill().map(() => Array(len).fill(false));
  for (var x = 0; x < len; x++) {
    dp[x][x] = true;
  }

  var max_len = 1;
  var start = 0;

  for (var l = 2; l <= len; l++) {
    for (var i = 0; i < len; i++) {
      var j = i + l - 1;
      if (j >= len) {
        break;
      }

      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (dp[i][j] && j - i + 1 > max_len) {
        max_len = j - i + 1;
        start = i;
      }
    }
  }

  return s.substring(start, start + max_len);
};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  longestPalindrome,
  {
    data: [["babad"], ["cbbd"]],
    structure: ["string"]
  },
  {
    data: ["bab", "bb"],
    structure: ["string"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/longest-palindromic-substring/');
