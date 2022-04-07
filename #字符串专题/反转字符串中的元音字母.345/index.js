/**
  给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

  元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。

  示例 1：
  输入：s = "hello"
  输出："holle"

  示例 2：
  输入：s = "leetcode"
  输出："leotcede"
   
  提示：
  1 <= s.length <= 3 * 105
  s 由 可打印的 ASCII 字符组成

 */

/**
 * @param {string} s
 * @return {string}
 */
 let reverseVowels = function(s) {
  let sArr = s.split('');
  let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

  let exchange = (left, right) => {
    let tmp = sArr[left];
    sArr[left] = sArr[right];
    sArr[right] = tmp;
  }

  let left = 0;
  let right = sArr.length - 1;
  while (left < right) {

    if (set.has(sArr[left]) && set.has(sArr[right]) ) {
      exchange(left, right);
    } else if (set.has(sArr[left]) && !set.has(sArr[right])) {
      right--;
      continue;
    } else if (!set.has(sArr[left] && set.has(sArr[right]))) {
      left++;
      continue;
    }

    left++;
    right--;
  }

  return sArr.join('');
};

let input = "hello";
console.log(reverseVowels(input))