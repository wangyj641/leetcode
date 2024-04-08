/*
* 9.回文数 
* 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
* 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
* 	例如，121 是回文，而 123 不是。
*  
* 示例 1：
* 输入：x = 121
* 输出：true
* 示例 2：
* 输入：x = -121
* 输出：false
* 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
* 示例 3：
* 输入：x = 10
* 输出：false
* 解释：从右向左读, 为 01 。因此它不是一个回文数。
*  
* 提示：
* 	-231 <= x <= 231 - 1
*  
* 进阶：你能不将整数转为字符串来解决这个问题吗？
* 
*/


// @QUESTION_START
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  console.log('----------------------------------')
  console.log(x);
  if (x < 0) return false;
  if (x === 0) return true;
  if (x % 10 === 0) return false;

  var r = 0;
  while (x > r) {
    r = r * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  console.log(x, r);

  if (x === r) return true;
  if (x === Math.floor(r / 10)) return true;
  return false;
};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  isPalindrome,
  {
    data: [[121], [-121], [10], [123321]],
    structure: ["number"]
  },
  {
    data: [true, false, false, true],
    structure: ["boolean"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/palindrome-number/');
