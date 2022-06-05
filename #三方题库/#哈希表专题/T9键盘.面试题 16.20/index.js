/**
  在老式手机上，用户通过数字键盘输入，手机将提供与这些数字相匹配的单词列表。每个数字映射到0至4个字母。
  输入一个数字序列，实现一个算法来返回匹配单词的列表。你会得到一张含有有效单词的列表。映射如下图所示：


  示例 1:
  输入: num = "8733", words = ["tree", "used"]
  输出: ["tree", "used"]

  示例 2:
  输入: num = "2", words = ["a", "b", "c", "d"]
  输出: ["a", "b", "c"]
  提示：

  num.length <= 1000
  words.length <= 500
  words[i].length == num.length
  num中不会出现 0, 1 这两个数字
 */

/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 */
let getValidT9Words = function(num, words) {
  let ans = [];
  let map = new Map([
    ['2', new Set(['a','b','c'])],
    ['3', new Set(['d','e','f'])],
    ['4', new Set(['g','h','i'])],
    ['5', new Set(['j','k','l'])],
    ['6', new Set(['m','n','o'])],
    ['7', new Set(['p','q','r','s'])],
    ['8', new Set(['t','u','v'])],
    ['9', new Set(['w','x','y','z'])],
    ['*', new Set(['+'])],
    ['#', new Set([''])],
  ]);

  for (let i = 0; i < words.length; i++) {
    const checkWord = words[i];

    let isPass = true;
    let j = 0;
    while (j < checkWord.length) {
      const checkChar = checkWord[j];

      if (!num[j] || !map.get(num[j]).has(checkChar)) {
        isPass = false;
        break;
      }

      j++;
    }

    if (isPass) {
      ans.push(checkWord);
    }
  }

  return ans;
};
// let input = ['8733',["tree", "used"]];
// let input = ["2",["a", "b", "c", "d"]];

let input = [
  "9675973753",
  ["alasvnpzur", "znwdgoiwso", "wduzrpnqrv", "ymrkxqdrlf", "epsqjclyqe", "zopjysdqke", "zhfxsdeimz", "eitgrsdnvt"]
]

let result = getValidT9Words(...input);