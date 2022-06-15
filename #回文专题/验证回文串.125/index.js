/**
  给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

  说明：本题中，我们将空字符串定义为有效的回文串。

  示例 1:
  输入: "A man, a plan, a canal: Panama"
  输出: true
  解释："amanaplanacanalpanama" 是回文串

  示例 2:
  输入: "race a car"
  输出: false
  解释："raceacar" 不是回文串
   
  提示：
  1 <= s.length <= 2 * 10^5
  字符串 s 由 ASCII 字符组成

 */

/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome2 = function(s) {
  let reg = /[a-zA-Z0-9]/;
  let sArr = s.split('');
  let newStrArr = [];

  for (let index = 0; index < sArr.length; index++) {
    const element = sArr[index];

    if (reg.test(element)) {
      newStrArr.push(element.toLocaleLowerCase());
    }
  }

  let left = 0;
  let right = newStrArr.length - 1;

  while (left < right) {
    if (newStrArr[left] !== newStrArr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// 优化
let isPalindrome = function(s) {
  let reg = /[a-zA-Z0-9]/;
  s = s.toLocaleLowerCase();
  let newStrArr = [];

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (reg.test(element)) {
      newStrArr.push(element);
    }
  }

  let left = 0;
  let right = newStrArr.length - 1;

  while (left < right) {
    if (newStrArr[left] !== newStrArr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

let input = 'A man, a plan, a canal: Panama';
// let input = '0P';

let result = isPalindrome(input);
console.log(result);