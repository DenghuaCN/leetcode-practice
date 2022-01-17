/**
  给你一个仅包含小写英文字母和 '?' 字符的字符串 s，请你将所有的 '?' 转换为若干小写字母，使最终的字符串不包含任何 连续重复 的字符。

  注意：你 不能 修改非 '?' 字符。

  题目测试用例保证 除 '?' 字符 之外，不存在连续重复的字符。

  在完成所有转换（可能无需转换）后返回最终的字符串。如果有多个解决方案，请返回其中任何一个。可以证明，在给定的约束条件下，答案总是存在的。


  示例 1：
  输入：s = "?zs"
  输出："azs"
  解释：该示例共有 25 种解决方案，从 "azs" 到 "yzs" 都是符合题目要求的。只有 "z" 是无效的修改，因为字符串 "zzs" 中有连续重复的两个 'z' 。

  示例 2：
  输入：s = "ubv?w"
  输出："ubvaw"
  解释：该示例共有 24 种解决方案，只有替换成 "v" 和 "w" 不符合题目要求。因为 "ubvvw" 和 "ubvww" 都包含连续重复的字符。

  示例 3：
  输入：s = "j?qg??b"
  输出："jaqgacb"

  示例 4：
  输入：s = "??yw?ipkj?"
  输出："acywaipkja"
   
  提示：
  1 <= s.length <= 100
  s 仅包含小写英文字母和 '?' 字符
 */

/**
 * 暴力法
 *
 * @param {string} s
 * @return {string}
 */
let modifyString2 = function(s) {
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let sArr = s.split('');
  let questionMarkMap = [];

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === '?') {
      questionMarkMap.push({
        index: i,
        preChar: sArr[i - 1],
        nextChar: sArr[i + 1]
      });
    }
  }

  for (let j = 0; j < questionMarkMap.length; j++) {
    const curQuestionObj = questionMarkMap[j];

    for (let s = 0; s < letters.length; s++) {
      const CHARACTER = letters[s];

      if (CHARACTER !== curQuestionObj.preChar && CHARACTER !== curQuestionObj.nextChar) {
        sArr[curQuestionObj.index] = CHARACTER;


        // 这里是这题的精华所在，需要动态的维护questionMarkMap，将当前替换的字符更新到map中，防止  "j?qg??b" => "jaqgaab" 这样的情况出现，当第二个'？'更改为'a'的时候，第三个问号map的'preChar'也要更新为'a'
        let nextQuestionObj = questionMarkMap[j + 1];
        if ((nextQuestionObj && nextQuestionObj.index - curQuestionObj.index === 1) && curQuestionObj.nextChar === '?') {
          questionMarkMap[j + 1].preChar = CHARACTER;
        }

        break;
      }

    }

  }

  let result = sArr.join('');

  return result;
};


/**
 * 暴力法（优化后）
 *
 * @param {string} s
 * @return {string}
 */
 let modifyString = function(s) {
  let letters = ['a', 'b', 'c']
  let sArr = s.split('');
  let questionMarkMap = [];

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === '?') {
      questionMarkMap.push({
        index: i,
        preChar: sArr[i - 1],
        nextChar: sArr[i + 1]
      });
    }
  }

  for (let j = 0; j < questionMarkMap.length; j++) {
    const curQuestionObj = questionMarkMap[j];

    for (let s = 0; s < letters.length; s++) {
      const CHARACTER = letters[s];

      if (CHARACTER !== curQuestionObj.preChar && CHARACTER !== curQuestionObj.nextChar) {
        sArr[curQuestionObj.index] = CHARACTER;


        // 这里是这题的精华所在，需要动态的维护questionMarkMap，将当前替换的字符更新到map中，防止  "j?qg??b" => "jaqgaab" 这样的情况出现，当第二个'？'更改为'a'的时候，第三个问号map的'preChar'也要更新为'a'
        let nextQuestionObj = questionMarkMap[j + 1];
        if ((nextQuestionObj && nextQuestionObj.index - curQuestionObj.index === 1) && curQuestionObj.nextChar === '?') {
          questionMarkMap[j + 1].preChar = CHARACTER;
        }

        break;
      }

    }

  }

  let result = sArr.join('');

  return result;
};


let input = "??yw?ipkj?"
let result = modifyString(input);

console.log(result);