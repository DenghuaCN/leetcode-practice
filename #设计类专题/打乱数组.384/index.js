/**
给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。

实现 Solution class:

Solution(int[] nums) 使用整数数组 nums 初始化对象
int[] reset() 重设数组到它的初始状态并返回
int[] shuffle() 返回数组随机打乱后的结果

示例 1：

输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
 

提示：

1 <= nums.length <= 50
-10^6 <= nums[i] <= 10^6
nums 中的所有元素都是 唯一的
最多可以调用 10^4 次 reset 和 shuffle
 */

/**
 * 缺点：当数据集增大时，性能严重下降，最后一张“牌”需要随机很多次。
 */
let resultFn1 = (that) => {
  let rangeRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor((Math.random() * (max - min)) + min);
  }

  let repeatSet = new Set();
  let count = 1;
  let ans = [];

  while (ans.length < that.initNums.length) {
    console.log('count', count++);

    let random = rangeRandom(0, that.initNums.length);

    if (!repeatSet.has(random)) {
      ans.push(that.initNums[random]);
      repeatSet.add(random);
    }
  }

  return ans;
}

/**
 * 如何优化?

 * 参考:https://gaohaoyang.github.io/2016/10/16/shuffle-algorithm/
 */
let resultFn2 = (that) => {
  let nArr = [...that.initNums];
  let count = 1;

  let i = nArr.length - 1;
  while (i >= 0) {

    // 重点!!!
    let randomIndex = Math.floor(Math.random() * (i + 1)); // 随着 i 递减，生成的随机数最大值也在递减(缩小了范围区间)。

    console.log('count', count++);

    // swap
    let temp = nArr[i];
    nArr[i] = nArr[randomIndex];
    nArr[randomIndex] = temp;
    i--;
  }

  return nArr;
}





/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.initNums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.initNums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  // return resultFn1(this);
  return resultFn2(this);
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

let input = [1,2,3];
let instance = new Solution(input);


console.time();
console.log(instance.shuffle());
console.timeEnd();


// console.log(instance.reset());
// console.log(instance.shuffle());