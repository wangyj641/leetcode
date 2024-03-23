/*
* 49.字母异位词分组 
* 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
* 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
*  
* 示例 1:
* 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
* 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
* 示例 2:
* 输入: strs = [""]
* 输出: [[""]]
* 示例 3:
* 输入: strs = ["a"]
* 输出: [["a"]]
*  
* 提示：
* 	1 <= strs.length <= 104
* 	0 <= strs[i].length <= 100
* 	strs[i] 仅包含小写字母
* 
*/


// @QUESTION_START
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  groupAnagrams,
  {
    data: [[  ["eat", "tea", "tan", "ate", "nat", "bat"]],[  [""]],[  ["a"]]],
    structure: ["string[]"]
  },
  {
    data: [ [["bat"],["nat","tan"],["ate","eat","tea"]], [[""]], [["a"]]],
    structure: ["string[][]"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/group-anagrams/');
