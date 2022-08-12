/**
  给你个整数数组 arr，其中每个元素都 不相同。

  请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。

  示例 1：
  输入：arr = [4,2,1,3]
  输出：[[1,2],[2,3],[3,4]]

  示例 2：
  输入：arr = [1,3,6,10,15]
  输出：[[1,3]]

  示例 3：
  输入：arr = [3,8,-10,23,19,-4,-14,27]
  输出：[[-14,-10],[19,23],[23,27]]
   
  提示：
  2 <= arr.length <= 10^5
  -10^6 <= arr[i] <= 10^6
 */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
let minimumAbsDifference = function(arr) {
  arr = arr.sort((a, b) => a - b);

  let ans = [];
  let min = Math.abs(arr[0] - arr[1]);

  let i = 0;
  while (i < arr.length - 1) {
    const everyTimeMin = Math.abs(arr[i + 1] - arr[i]);

    if (everyTimeMin < min) {
      ans = [];
      ans.push([arr[i], arr[i + 1]]);
      min = everyTimeMin;
    } else if (everyTimeMin === min) {
      ans.push([arr[i], arr[i + 1]]);
    }

    i++;
  }

  return ans;
};

// let input = [4,2,1,3];
// let input = [1,3,6,10,15];
let input = [3,8,-10,23,19,-4,-14,27];
let r = minimumAbsDifference(input);

console.log(r);