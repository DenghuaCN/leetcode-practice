/**
  自除数 是指可以被它包含的每一位数整除的数。

  例如，128 是一个 自除数 ，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
  自除数 不允许包含 0 。

  给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 。

  示例 1：
  输入：left = 1, right = 22
  输出：[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

  示例 2:
  输入：left = 47, right = 85
  输出：[48,55,66,77]
   
  提示：
  1 <= left <= right <= 10^4
*/

/**
 * 暴力法
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
let selfDividingNumbers2 = function(left, right) {
  let isSelfDividingNumber = (num) => {
    let str = String(num);
    const len = str.length;

    let i = 0;
    while (i < len) {
      const curNum = Number(str[i]);

      if (num % curNum !== 0 || curNum === 0) {
        return false;
      }
      i++;
    }
    return true;
  }

  let i = left;
  let len = right;
  let ans = [];


  while (i <= len) {
    if (isSelfDividingNumber(i)) {
      ans.push(i);
    }
    i++;
  }

  return ans;
};


/**
 * 面向答案编程 : )
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
let selfDividingNumbers3 = (left, right) => {
  let allAnswers = [1,2,3,4,5,6,7,8,9,11,12,15,22,24,33,36,44,48,55,66,77,88,99,111,112,115,122,124,126,128,132,135,144,155,162,168,175,184,212,216,222,224,244,248,264,288,312,315,324,333,336,366,384,396,412,424,432,444,448,488,515,555,612,624,636,648,666,672,728,735,777,784,816,824,848,864,888,936,999,1111,1112,1113,1115,1116,1122,1124,1128,1131,1144,1155,1164,1176,1184,1197,1212,1222,1224,1236,1244,1248,1266,1288,1296,1311,1326,1332,1335,1344,1362,1368,1395,1412,1416,1424,1444,1448,1464,1488,1515,1555,1575,1626,1632,1644,1662,1692,1715,1722,1764,1771,1824,1848,1888,1926,1935,1944,1962,2112,2122,2124,2128,2136,2144,2166,2184,2196,2212,2222,2224,2226,2232,2244,2248,2262,2288,2316,2322,2328,2364,2412,2424,2436,2444,2448,2488,2616,2622,2664,2688,2744,2772,2824,2832,2848,2888,2916,3111,3126,3132,3135,3144,3162,3168,3171,3195,3216,3222,3264,3276,3288,3312,3315,3324,3333,3336,3339,3366,3384,3393,3432,3444,3492,3555,3612,3624,3636,3648,3666,3717,3816,3864,3888,3915,3924,3933,3996,4112,4116,4124,4128,4144,4164,4172,4184,4212,4224,4236,4244,4248,4288,4332,4344,4368,4392,4412,4416,4424,4444,4448,4464,4488,4632,4644,4824,4848,4872,4888,4896,4932,4968,5115,5155,5355,5515,5535,5555,5775,6126,6132,6144,6162,6168,6192,6216,6222,6264,6288,6312,6324,6336,6366,6384,6432,6444,6612,6624,6636,6648,6666,6696,6762,6816,6864,6888,6912,6966,6984,7112,7119,7175,7224,7266,7371,7448,7476,7644,7728,7777,7784,8112,8128,8136,8144,8184,8224,8232,8248,8288,8328,8424,8448,8488,8496,8616,8664,8688,8736,8824,8832,8848,8888,8928,9126,9135,9144,9162,9216,9288,9315,9324,9333,9396,9432,9612,9648,9666,9864,9936,9999];
  let ans = [];

  let start = -1;
  let end = -1;

  // 获取左起始点
  for (let i = left; i <= right; i++) {
    let index = allAnswers.indexOf(i);
    if (index !== -1) {
      start = index;
      break;
    }
  }
  // 获取右起始点
  for (let j = right; j >= left; j--) {
    let index = allAnswers.indexOf(j);
    if (index !== -1) {
      end = index;
      break;
    }
  }

  if (start === -1 && end === -1) {
    return [];
  }

  while (start <= end) {
    ans.push(allAnswers[start])
    start++;
  }

  return ans;
}


/**
 * 暴力优化
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
let selfDividingNumbers = (left, right) => {
  let originNum = null;
  let isSelfDividingNumber = (num) => {
    let cur = num % 10;

    if (cur === 0 || originNum % cur !== 0) {
      return false;
    } else if (cur < 10 && originNum % cur === 0) {
      return true;
    }

    isSelfDividingNumber(num / (num - cur));
  }


  let i = left;
  let len = right;
  let ans = [];

  while (i <= len) {
    if (isSelfDividingNumber(i)) {
      ans.push(i);
    }
    i++;
  }

  return ans;

}


// let input = [47, 85];
let input = [1, 22];
// let input = [1, 1]
// let input = [13, 13]

// let result = selfDividingNumbers(...input);

// console.log(result);