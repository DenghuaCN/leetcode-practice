/*
给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
*/

let nums = [123, 13, 3123, 213, 13, 546563432,234, 2341, 13,324 , 32432, 456,45, 341, 72,341]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i+1]){
            return true;
        }
    }
    return false;
};
let a = containsDuplicate(nums);

console.log(a);

/* 考点: 数组，双指针 */
