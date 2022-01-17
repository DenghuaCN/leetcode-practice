/**
  反转字符串中的单词 III
  给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

  示例：

  输入："Let's take LeetCode contest"
  输出："s'teL ekat edoCteeL tsetnoc"

  提示：
  * 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
*/

/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function(s) {
  let sArr = s.split(' ');

  for (let i = 0; i < sArr.length; i++) {
    let curWordArr = sArr[i].split('');
    let left = 0;
    let right = curWordArr.length - 1;

    while (left < right) { // 性能比Array.prototype.reverse差，待优化
      let tmp = curWordArr[left];
      curWordArr[left] = curWordArr[right];
      curWordArr[right] = tmp;

      left++;
      right--;
    }
    sArr[i] = curWordArr.join('');
  }

  return sArr.join(' ');
};

let input = "Let's take LeetCode contest";
let output = reverseWords(input);

/* 考点： 数组，双指针  */