/**
  编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

  不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

  示例 1：

  输入：s = ["h","e","l","l","o"]
  输出：["o","l","l","e","h"]

  示例 2：
  输入：s = ["H","a","n","n","a","h"]
  输出：["h","a","n","n","a","H"]  one 0 5 two 1 4 three 2 3 four 3 2
   
  提示：

  1 <= s.length <= 105
  s[i] 都是 ASCII 码表中的可打印字符
*/

let s = ["a","b","c","d","e","f"];

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  let middleValue = "";

  for (let i = 0; i < s.length; i++) {
    middleValue = s[left];
    s[left] = s[right];
    s[right] = middleValue;

    if (right - left === 1) {
      return s;
    } else if (right === left) {
      return s;
    }
    left += 1;
    right -= 1;
  }
};

let result = reverseString(s);
console.log(result);
