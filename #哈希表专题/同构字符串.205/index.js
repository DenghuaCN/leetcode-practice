/**
  给定两个字符串 s 和 t ，判断它们是否是同构的。

  如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

  每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

  示例 1:
  输入：s = "egg", t = "add"
  输出：true

  示例 2：
  输入：s = "foo", t = "bar"
  输出：false

  示例 3：
  输入：s = "paper", t = "title"
  输出：true
   
  提示：

  1 <= s.length <= 5 * 10^4
  t.length == s.length
  s 和 t 由任意有效的 ASCII 字符组成

 */

/**
 * 哈希映射
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let len = s.length;
  let sArr = s.split('');
  let tArr = t.split('');
  let s2t = new Map();
  let t2s = new Map();


  let i = 0;
  while (i < len) {
    const sChar = sArr[i];
    const tChar = tArr[i];
    s2t.set(sChar, tChar); // 以s串中字符为key，t串中字符为value建立映射
    t2s.set(tChar, sChar); // 以t串中字符为key，s串中字符为value建立映射
    i++;
  }

  console.log(s2t);
  console.log(t2s);


  let j = 0;
  while (j < len) {
    let x= sArr[j];
    let y = tArr[j];

    if ((s2t.has(x) && s2t.get(x) !== y) || t2s.has(y) && t2s.get(y) !== x) {
      return false;
    }

    j++;
  }

  return true;
};

// let input = ['egg', 'add'];
let input = ['foo', 'bar'];
// let input = ['paper', 'title']
let result = isIsomorphic(...input);

console.log(result);