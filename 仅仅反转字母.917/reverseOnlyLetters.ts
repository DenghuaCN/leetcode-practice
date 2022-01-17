/**
  给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。

  示例 1：
    输入："ab-cd"
    输出："dc-ba"

  示例 2：
    输入："a-bC-dEf-ghIj"
    输出："j-Ih-gfE-dCba"

  示例 3：
    输入："Test1ng-Leet=code-Q!"
    输出："Qedo1ct-eeLg=ntse-T!"
   
  提示：
    S.length <= 100
    33 <= S[i].ASCIIcode <= 122 
    S 中不包含 \ or "

 */

let reverseOnlyLetters2 = (s: string): string => {
  let reg:RegExp = /[a-zA-Z]/;
  let sArr:Array<any>  = s.split('');

  let left: number = 0;
  let right: number = sArr.length - 1;

  while (left < right) {
    if (!reg.test(sArr[left])) {
      left++;
      continue;
    } else if (!reg.test(sArr[right])) {
      right--;
      continue;
    }

    let tmp = sArr[left];
    sArr[left] = sArr[right];
    sArr[right] = tmp;

    left++;
    right--;
  }

  return sArr.join('');
};

// 考点：双指针(反向双指针) 原地算法