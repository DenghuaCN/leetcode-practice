// https://github.com/azl397985856/leetcode/blob/master/thinkings/slide-window.md

// [5,4,-1,7,8];

/**
 * 暴力循环法
 *
 * 求 k = 3 下的最大子数组和
 * @func slidingWindow
 * @param {number[]} nums // 输入数组
 * @param {number} k  // 窗口大小
 */
let slidingWindowMax = (nums, k) => {
  let max = Number.MIN_SAFE_INTEGER;
  let cycles = nums.length - k + 1; // 此窗口长度下，需要在此数组上移动多少次
  let count = 0;

  let left = 0; // 窗口的左指针，移动窗口时需要递增
  let right = k; // 每次移动窗口后，右指针的指应始终满足 k = r - l + 1 移动窗口时也需要递增

  // [5,4,-1,7,8];
  // 需要循环 length - k + 1(3)轮
  // k = 3 left 0 right 2 => k = r - l + 1 | 5 + 4 + (-1) => 8
  // k = 3 left 1 right 3 => k = r - l + 1 | 4 + (-1) + 7 => 10
  // k = 3 left 2 right 4 => k = r - l + 1 | -1 + 7 + 8 => 14


  while (count < cycles) {
    let tmp = 0; // 每次窗口的默认值应为0

    // 每次移动窗口后，迭代窗口的长度求值
    for (let i = 0; i < k; i++) {
      tmp = tmp + nums[left + i]; // 每次移动窗口后要迭代的值的索引即为 nums[左指针 + i]
    }

    max = Math.max(max, tmp);

    count += 1;
    left += 1;
    right += 1;
  }

  console.log(max);
}

slidingWindowMax([5,4,-1,7,8], 3);


// 时间复杂度: O(cycles * k) => O(n^2)