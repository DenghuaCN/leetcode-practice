/**
  给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

  示例 1：
  输入：timePoints = ["23:59","00:00"]
  输出：1

  示例 2：
  输入：timePoints = ["00:00","23:59","00:00"]
  输出：0
   
  提示：
  2 <= timePoints <= 2 * 10^4
  timePoints[i] 格式为 "HH:MM"
 */


/**
 * 暴力
 *
 *
 * @param {string[]} timePoints
 * @return {number}
 */
let findMinDifference2 = (timePoints) => {
  let calculateDiff = (t1, t2) => {
    // 转换为分
    let transferSecond = (t) => {
      return (t[0] * 10 + t[1] * 1) * (60) + (t[3] * 10 + t[4] * 1); // "HH:MM"
    }

    let msec1 = transferSecond(t1);
    let msec2 = transferSecond(t2);

    let min = Math.abs(msec1 - msec2);

    // 24小时共1440分钟
    if (min < 1440 && 1440 - min < min) { // 这段if语句是这题的重点，对于["05:31","22:08","00:35"]这样的case，最小值在22:08~00:35之间，而不是05:31 ~ 00:35
      return 1440 - min;
    } else {
      return min;
    }
  }

  let min = Number.MAX_VALUE;

  for (let i = 0; i < timePoints.length; i++) {
    for (let j = i + 1; j < timePoints.length; j++) {
      let everyTimeDiff = calculateDiff(timePoints[i], timePoints[j]);

      if (everyTimeDiff < min) {
        min = everyTimeDiff;
      }
    }
  }

  return min;
};



/**
 * 优化
 * 时间复杂度：O (min(n, C) log min(n, C))，其中n是数组timePoints的长度，C = 24 x 60 = 144O。 由于当 n > C时直接返回。，排序时的n不会超过C，因此排序需要O(min(n, C) log min(n, C)）的 时间。
 * 空间复杂度：O(log min(n, C))。排序需要O(log min(n, C)）的栈空间。

 * 将 timePoints 排序后，最小时间差必然出现在 timePoints 的两个相邻时间，或者 timePoints 的两个首尾时间中。因此排序后遍历一遍 timePoints 即可得到最小时间差。
 *
 * @param {string[]} timePoints
 * @return {number}
 */
 let findMinDifference = (timePoints) => {
  let min = Number.MAX_VALUE;

  // 鸽巢原理 (妙啊妙啊)
  if (timePoints.length > 1440) { // 最小时间差是0，最大时间差是24小时，也就是24 * 60 = 1440分钟，也就是不重复的时间差异分布在 0 ～ 1440，由于题给数组2 <= timePoints <= 2 * 10^4，只要数组长度大于1440，说明必定有时间重复了1440内任一一个值，即可返回0
    return 0;
  }

  let calculateDiff = (t1, t2) => {
    let transferSecond = (t) => {
      return (t[0] * 10 + t[1] * 1) * (60) + (t[3] * 10 + t[4] * 1);
    }

    let msec1 = transferSecond(t1);
    let msec2 = transferSecond(t2);

    let min = Math.abs(msec1 - msec2);

    // 24小时共1440分钟
    if (min < 1440 && 1440 - min < min) { // 这段if语句是这题的重点，对于["05:31","22:08","00:35"]这样的case，最小值在22:08~00:35之间，而不是05:31 ~ 00:35
      return 1440 - min;
    } else {
      return min;
    }
  }

  timePoints.sort();

  // 相邻时间比较
  for (let i = timePoints.length - 1; i > 0; i--) {
    let everyTimeDiff = calculateDiff(timePoints[i], timePoints[i-1])

    if (everyTimeDiff < min) {
      min = everyTimeDiff;
    }
  }

  // 首尾时间比较
  let fromAndBackDiff = calculateDiff(timePoints[0], timePoints[timePoints.length - 1])
  if (fromAndBackDiff < min) {
    min = fromAndBackDiff;
  }

  return min;
};

let input = ["05:31","22:08","00:35"];
let result = findMinDifference(input);
