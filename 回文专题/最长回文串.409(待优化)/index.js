/**
  给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。

  在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。

  注意:
  假设字符串的长度不会超过 1010。

  示例 1:
  输入:
  "abccccdd"
  输出:
  7

  解释:
  我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。

  //
 */

/**
 * @param {string} s
 * @return {number}
 */
let longestPalindrome = function(s) {
  let sArr = s.split('');
  let maxAllLen = 0;
  let isExistOdd = false;
  let map = {};

  for (let i = 0; i < sArr.length; i++) {
    const char = sArr[i];

    if (char in map) {
      map[char] += 1;
      continue
    }

    map[char] = 1;
  }

  for (const key in map) {
    let n = map[key];

    if (n % 2 === 0) {  // 所有出现偶数次的字符都能构成回文串的一部分
      maxAllLen += n;
    } else {
      isExistOdd = true;
      maxAllLen += ((n + 1) / 2 - 1) * 2;
    }
  }


  if (isExistOdd) {
    return maxAllLen + 1; // 最后的1个长度为出现次数为奇数次且出现最多次的字符
  }
  return maxAllLen;
};


let input = "tattarrattat";
// let input = "ababababa"; // a: 5 b: 4 // b b  aaaaa   b b
// let input = 'ccc'; // cc azza  dd
// let input = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
let result = longestPalindrome(input);

console.log(result);