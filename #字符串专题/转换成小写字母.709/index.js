/**
  给你一个字符串 s ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。

  示例 1：
  输入：s = "Hello"
  输出："hello"

  示例 2：
  输入：s = "here"
  输出："here"

  示例 3：
  输入：s = "LOVELY"
  输出："lovely"

  提示：
  1 <= s.length <= 100
  s 由 ASCII 字符集中的可打印字符组成
 */

/**
 * @param {string} s
 * @return {string}
 */
let toLowerCase = function(s) {
  let sArr = s.split('');
  let map = new Map();

  let i = 65;
  let j = 97;
  while (i < 91) {
    map.set(String.fromCodePoint(i), String.fromCodePoint(j));
    i++;
    j++;
  }

  for (let p = 0; p < sArr.length; p++) {
    const char = sArr[p];

    if (map.has(char)) {
      sArr[p] = map.get(char);
    }
  }

  return sArr.join('');
};

/**
 * 对拍测试
 */

// 随机生成字符串s，1 <= s.lenth <= 100，其中s为ASCii中可打印字符 32 <= codePoint < 128
let fn2 = () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let randomChar = () => {
    return String.fromCodePoint(getRandomInt(32, 126));
  }

  let arr = new Array(getRandomInt(1, 101)).fill('');

  let i = 0;
  while (i < arr.length) {
    arr[i] = randomChar();
    i++;
  }
  const ans = arr.join('');

  return ans;
}


let diff = (fn1, fn2) => {

  let i = 0;
  while (i < 100) {
    let input = fn2();
    let ans = fn1(input);

    console.log(i+1, input, "|", ans);
    i++;
  }
}

diff(toLowerCase, fn2)