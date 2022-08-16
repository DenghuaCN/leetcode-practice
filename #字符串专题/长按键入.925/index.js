/**
  你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

  你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

  示例 1：
  输入：name = "al*ex", typed = "aaleex"
  输出：true
  解释：'alex' 中的 'a' 和 'e' 被长按。

  示例 2：
  输入：name = "saeed", typed = "ssaaedd"
  输出：false
  解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
   
  提示：
  1 <= name.length, typed.length <= 1000
  name 和 typed 的字符都是小写字母
 */

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
let isLongPressedName = function(name, typed) {
  let i = 0;
  let j = 0;
  while (j < typed.length) {

    // 相同则两个指针右移
    if (i < typed.length && name[i] === typed[j]) {
      i++;
      j++;
      continue;
    } else if (j > 0 && typed[j] === typed[j - 1]) { // 为长按输入，只移动j指针
      j++;
    } else {
      return false;
    }
  }

  return i === name.length;
};


// let input = ['alex', 'aaleex'];
// let input = ['saeed', 'ssaaedd'];
// let input = ["leelee", "lleeelee"]; // true
// let input = ["alex", "aaleexa"]; // false
// let input = ["alex", "aaleexeex"]; // false
// let input = ["vtkgn", "vttkgnn"]; // true
let input = ["alex", "aaleelx"]; // false


let r = isLongPressedName(...input);

console.log(r);
