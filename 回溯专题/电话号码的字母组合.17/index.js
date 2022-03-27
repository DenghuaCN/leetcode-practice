/**
  给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

  给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

  图见./phone-map.png

  示例 1：
  输入：digits = "23"
  输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]

  示例 2：
  输入：digits = ""
  输出：[]

  示例 3：
  输入：digits = "2"
  输出：["a","b","c"]

  提示：
  0 <= digits.length <= 4 // 最多3^4 = 81种组合
  digits[i] 是范围 ['2', '9'] 的一个数字。

 */

/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
  if (digits.length === 0) return [];

  const digitsMap = {
    '0': '',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  let res = [];

  let dfs = (curStr, i) => {
    if (i > digits.length - 1) {
      res.push(curStr);
      return;
    }

    let letters = digitsMap[digits[i]];
    for (const char of letters) {
      dfs(curStr + char, i + 1);
    }
  }

  dfs('', 0);

  return res;
};




let input = '23';
let result = letterCombinations(input);

console.log(result);
// ['a','b','c'] | ['d','e','f'] 3^2
// ad ae af bd be bf cd ce cf

// ['a','b','c'] | ['d','e','f'] | ['g','h','i'] 3^4
// ad ag ae ah af ai bd bg be bh bf bi cd cg ce ch cf ci dg dh di eg eh ei fg fh fi
