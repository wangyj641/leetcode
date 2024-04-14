/*
* 6.Z 字形变换 
* 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
* 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
* P   A   H   N
* A P L S I I G
* Y   I   R
* 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
* 请你实现这个将字符串进行指定行数变换的函数：
* string convert(string s, int numRows);
*  
* 示例 1：
* 输入：s = "PAYPALISHIRING", numRows = 3
* 输出："PAHNAPLSIIGYIR"
* 示例 2：
* 输入：s = "PAYPALISHIRING", numRows = 4
* 输出："PINALSIGYAHRPI"
* 解释：
* P     I    N
* A   L S  I G
* Y A   H R
* P     I
* 示例 3：
* 输入：s = "A", numRows = 1
* 输出："A"
*  
* 提示：
* 	1 
* 	s 由英文字母（小写和大写）、',' 和 '.' 组成
* 	1 
* 
*/


// @QUESTION_START
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  console.log(s);
  console.log(numRows);
  var len = s.length;
  var width = (Math.floor(len / (numRows * 2 - 2)) + 1) * (numRows - 1);
  console.log(width);

  var arr = Array(numRows).fill().map(() => Array(width).fill('a'));
  console.log(arr);

  var count = 0;
  for (var index = 0; index < len; index += (numRows * 2 - 2)) {
    for (var i = 0; i < numRows * 2 - 2; i++) {
      if (i < numRows) {
        arr[i][count] = s[index + i];
      } else {
        arr[i - numRows][count + i - numRows + 1] = s[index + i];
      }
    }
    count++;
  }

  console.log(arr);
};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  convert,
  {
    data: [["PAYPALISHIRING", 3], ["PAYPALISHIRING", 4], ["A", 1]],
    structure: ["string", "number"]
  },
  {
    data: ["PAHNAPLSIIGYIR", "PINALSIGYAHRPI", "A"],
    structure: ["string"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/zigzag-conversion/');
