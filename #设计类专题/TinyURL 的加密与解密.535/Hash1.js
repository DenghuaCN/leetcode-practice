/**
 * 参考: https://jorgechavez.dev/tag/algorithms/
 */
class Solution {
  constructor() {
    this.bucket = new Map();
  }

  // 加密
  encode(url) {
    let bucketName = this.hash(url);
    let tinyUrl = `http://tinyurl.com/${bucketName}`;
    this.bucket.set(tinyUrl, url)

    return tinyUrl;
  }
  // 解密
  decode(tinyUrl) {
    return this.bucket.get(tinyUrl);
  }
  /**
   * 字符串哈希
   */
  hash(word) {
    let p = 67; // 一个大致等于使用的不同字符的数量 的素数
    let m = 1e9 + 9; // 这个数字越大，碰撞2个随机字符串的概率越小 也是一个素数

    let hashValue = 0;

    for (let i = 0; i < word.length; i++) {
      const CHAR_CODE = word[i].charCodeAt();
      const CODE = CHAR_CODE * Math.pow(p, i);

      hashValue += CODE;
    }

    return hashValue % m;
  }
}

module.exports = Solution;