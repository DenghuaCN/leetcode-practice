/**
  以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
  请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

  示例 1：

  输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
  输出：[[1,6],[8,10],[15,18]]
  解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
  示例 2：

  输入：intervals = [[1,4],[4,5]]
  输出：[[1,5]]
  解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

  提示：

  1 <= intervals.length <= 104
  intervals[i].length == 2
  0 <= start[i] <= end[i] <= 104
*/


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function(intervals) {
  intervals.sort((a, b ) => {
    return a[0] - b[0];
  });

  let outputs = [ intervals[0] ];

  for (let i = 1; i < intervals.length; i++) {
    let lastInterval = outputs[outputs.length - 1];
    let left = lastInterval[1];
    let right = intervals[i][0];

    if (left - right >= 0) {
      // 相交
      lastInterval[1] = Math.max(left, intervals[i][1]);
    } else {
      outputs.push(intervals[i]);
    }
  }

  return outputs;
};

console.log(merge([ [ 1, 3 ], [ 2, 6 ], [ 8, 10 ], [ 12, 20 ], [ 15, 18 ] ]));
