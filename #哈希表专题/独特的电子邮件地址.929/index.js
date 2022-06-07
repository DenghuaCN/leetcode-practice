/**
  每个 有效电子邮件地址 都由一个 本地名 和一个 域名 组成，以 '@' 符号分隔。除小写字母之外，电子邮件地址还可以含有一个或多个 '.' 或 '+' 。

  * 例如，在 alice@leetcode.com中， alice 是 本地名 ，而 leetcode.com 是 域名 。
    alice@leetcode.com
    本地名 @ 域名
    本地名中包含句点('.')，则发往那里的邮件将会转发到本地名中没有点的同一地址

  * 如果在电子邮件地址的 本地名 部分中的某些字符之间添加句点（'.'），则发往那里的邮件将会转发到本地名中没有点的同一地址。请注意，此规则 不适用于域名 。
    例如:
    "alice.z@leetcode.com”
    “alicez@leetcode.com” 
    会转发到同一电子邮件地址。

  * 如果在 本地名 中添加加号（'+'），则会忽略第一个加号后面的所有内容。这允许过滤某些电子邮件。同样，此规则 不适用于域名 。
    例如:
    m.y+name@email.com
    将转发到 my@email.com。
    可以同时使用这两个规则。

  给你一个字符串数组 emails，我们会向每个 emails[i] 发送一封电子邮件。返回实际收到邮件的不同地址数目。

  示例 1：
  输入：emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
  输出：2
  解释：实际收到邮件的是 "testemail@leetcode.com" 和 "testemail@lee.tcode.com"。

  示例 2：
  输入：emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
  输出：3

  提示：
  1 <= emails.length <= 100
  1 <= emails[i].length <= 100
  emails[i] 由小写英文字母、'+'、'.' 和 '@' 组成
  每个 emails[i] 都包含有且仅有一个 '@' 字符
  所有本地名和域名都不为空
  本地名不会以 '+' 字符作为开头
 */

/**
 * 暴力
 * @param {string[]} emails
 * @return {number}
 */
let numUniqueEmails2 = function(emails) {
  let localNameSet = new Set(),
      hostNameSet = new Set();

  let ans = 0;

  let getLocalAndHost = (email) => {
    let localName = '';
    let hostName = '';

    if (email.includes('+')) {
      let tmp = email.split('@');

      localName = email.split('+')[0];
      localName = localName.split('.').join('');

      hostName = tmp[tmp.length - 1];
    } else {
      let tmp = email.split('@');

      localName = tmp[0];
      localName = localName.split('.').join('');

      hostName = tmp[tmp.length - 1];
    }

    // console.log(`email: ${email} | 本地名:${localName} | 域名:${hostName}`);

    return {
      localName,
      hostName
    }
  }

  for (let i = 0; i < emails.length; i++) {
    let {localName, hostName} = getLocalAndHost(emails[i]);

    if (localNameSet.has(localName) && hostNameSet.has(hostName)) { // 如果任意email的有效本地名和域名都能在集合中找到，说明存在一个相同地址。
      continue;
    } else {
      localNameSet.add(localName);
      hostNameSet.add(hostName);
      ans++;
    }
  }

  return ans;
};


/**
 * API救我狗命
 */
let numUniqueEmails = function(emails) {
  const emailSet = new Set();

  for (const email of emails) {
      const AT_INDEX = email.indexOf('@');

      let local = email.slice(0, INDEX).split("+")[0];
      local = local.replaceAll(".", ""); // 去掉本地名中所有的'.'

      const COMPLETE_MAIL = local + email.slice(INDEX);
      emailSet.add(COMPLETE_MAIL);
  }

  return emailSet.size;
};

let input = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
// let input = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"];
let result = numUniqueEmails(input);

console.log(result);
