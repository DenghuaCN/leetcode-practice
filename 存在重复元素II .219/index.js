/**
  给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 *至多* 为 k。

  示例 1:
  输入: nums = [1,2,3,1], k = 3
  解释: nums[3] === nums[0]  |  (3 - 0 = 3 | 0 - 3 = (-3))
  输出: true

  示例 2:
  输入: nums = [1,0,1,1], k = 1
  解释: nums[2] === num[3] | (3 - 2 = 1 | 2 - 3 = (-1))
  输出: true

  示例 3:
  输入: nums = [1,2,3,1,2,3], k = 2
  输出: false

  示例 4:
  输入: nums = [99, 99], k = 2
  输出: true

 */

// 坑：注意给题中的“至多“可以翻译为 "差的绝对值不超过 k "，这题暴力会超时
// https://leetcode-cn.com/problems/contains-duplicate-ii/solution/hua-jie-suan-fa-219-cun-zai-zhong-fu-yuan-su-ii-by/

/**
 * 滑动窗口(Set) 时间空间表现最优
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate2 = function(nums, k) {
  let mySet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) {
      return true;
    }

    mySet.add(nums[i])

    if (mySet.size > k) { // Set中始终维护 K 个值，当超过K个值时，把首个值删除。
      mySet.delete(nums[i - k]); // Set.prototype.delete(value): 移除Set中与这个值相等的元素
    }
  }

  return false;
};


/**
 * 滑动窗口(队列)  用时>3000ms
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate1 = (nums, k) => {
  class Queue {
    constructor() {
      this.item = [];
    }
    enqueue(element) {
      this.item.push(element);
    }
    dequeue(element) {
      this.item.shift();
    }
    empty() {
      this.item = [];
    }
    have(element) {
      return this.item.includes(element);
    }
    size() {
      return this.item.length;
    }
  }

  let queue = new Queue();

  for (let i = 0; i < nums.length; i++) {
    console.log(queue);

    if (queue.have(nums[i])) { // 如果将要enqueue的元素与队列内任一元素想等，则判定在 K 的范围内存在满足题意的两个索引。
      return true;
    }

    queue.enqueue(nums[i]);

    if (queue.size() > k) {
      queue.dequeue();
    }
  }

  return false;
}

/**
 * 哈希表(空间占用表现不优)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function(nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    // key: element value: i
    if (map.has(element) && i - map.get(element) <= k) {
      return true;
    }

    map.set(element, i);
  }

  return false;
};


// let input = [[1,2,3,1,2,3],2];
let input = [[1,0,1,1], 1];
// let input = [[99, 99]];

let result = containsNearbyDuplicate(...input);

console.log(result);