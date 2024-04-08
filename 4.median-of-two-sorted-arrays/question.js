/*
* 4.寻找两个正序数组的中位数 
* 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
* 算法的时间复杂度应该为 O(log (m+n)) 。
*  
* 示例 1：
* 输入：nums1 = [1,3], nums2 = [2]
* 输出：2.00000
* 解释：合并数组 = [1,2,3] ，中位数 2
* 示例 2：
* 输入：nums1 = [1,2], nums2 = [3,4]
* 输出：2.50000
* 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
*  
*  
* 提示：
* 	nums1.length == m
* 	nums2.length == n
* 	0 <= m <= 1000
* 	0 <= n <= 1000
* 	1 <= m + n <= 2000
* 	-106 <= nums1[i], nums2[i] <= 106
* 
*/


// @QUESTION_START
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  function comp(n1, n2) {
    return n1 - n2;
  }

  var newArr = nums1.concat(nums2).sort(comp);
  console.log(newArr);
  var len = newArr.length;

  var res = 0;
  if (len % 2 === 0) {
    res = (newArr[len / 2 - 1] + newArr[len / 2]) / 2
  } else {
    res = newArr[(len - 1) / 2]
  }
  return res;
};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  findMedianSortedArrays,
  {
    data: [[nums1 = [1, 3], nums2 = [2]], [nums1 = [1, 2], nums2 = [3, 4]], [nums1 = [3], nums2 = [-2, -1]]],
    structure: ["number[]", "number[]"]
  },
  {
    data: [2.00000, 2.50000, -1],
    structure: ["number"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/median-of-two-sorted-arrays/');
