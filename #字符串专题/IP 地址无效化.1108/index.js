/**
给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。

所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。

示例 1：
输入：address = "1.1.1.1"
输出："1[.]1[.]1[.]1"

示例 2：
输入：address = "255.100.50.0"
输出："255[.]100[.]50[.]0"
 
提示：
给出的 address 是一个有效的 IPv4 地址
 */

/**
 * @param {string} address
 * @return {string}
 */
let defangIPaddr = function(address) {

  let ans = '';

  let i = 0;
  while (i < address.length) {
    if (address[i] === '.') {
      ans += '[.]'
    } else {
      ans += address[i];
    }
    i++;
  }
  return ans;
};

// let input = "1.1.1.1";
let input = "255.100.50.0"
let r = defangIPaddr(input);

console.log(r);