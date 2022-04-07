/**
  给你两个数组，arr1和arr2，arr2中的元素各不相同，arr2中的每个元素都出现在 arr1 中。

  对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
   
  示例 1：
  输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
  输出：[2,2,2,1,4,3,3,9,6,7,19]

  示例  2:
  输入：arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
  输出：[22,28,8,6,17,44]

  提示：
  1 <= arr1.length, arr2.length <= 1000
  0 <= arr1[i], arr2[i] <= 1000
  arr2 中的元素 arr2[i]  各不相同 
  arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
let relativeSortArray2 = function(arr1, arr2) {
  let arr1Map = new Map();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1Map.has(arr1[i])) {
      arr1Map.set(arr1[i], arr1Map.get(arr1[i]) + 1);
    } else {
      arr1Map.set(arr1[i], 1)
    }
  }

  let j = 0;
  while (j < arr2.length) {
    if (arr1Map.has(arr2[j])) {
      let occurrenceTime = arr1Map.get(arr2[j]);

      let z = 0;
      while (z < occurrenceTime) {
        arr2.splice(j, 0, arr2[j]);
        z++;
      }
      arr2.splice(j, 1);
      j += occurrenceTime - 1;

      arr1Map.delete(arr2[j]);
    }
    j += 1;
  }

  let residue = [];
  for (const [key, time] of arr1Map) {
    for (let i = 0; i < time; i++) {
      residue.push(key);
    }
  }

  residue = residue.sort((a, b) => a - b);
  return [...arr2, ...residue];
};


/**
 * 计数排序
 * @param {array} arr1
 * @param {array} arr2
 */
let relativeSortArray = (arr1, arr2) => {
  arr1 = arr1.sort((a, b) => { // 保证在Map中的插入顺序
    return a - b;
  })

  let arr1Map = new Map();
  let ans = new Array(arr1.length).fill(0);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1Map.has(arr1[i])) {
      arr1Map.set(arr1[i], arr1Map.get(arr1[i]) + 1);
    } else {
      arr1Map.set(arr1[i], 1)
    };
  }

  let j = 0;
  let index = 0;
  while (j < arr2.length) {
    if (arr1Map.has(arr2[j])) {
      let everyCharTime = arr1Map.get(arr2[j]);
      for (let i = 0; i < everyCharTime; i++) {
        ans[index] = arr2[j];
        index++;
      };
      arr1Map.set(arr2[j], 0);
    }
    j++;
  }


  for (const [key, value] of arr1Map) {
    if (value !== 0) {
      for (let i = 0; i < value; i++) {
        ans[index] = key;
        index++;
      }
    }
  }


  return ans;
}


// let input = [[2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]];
let input = [[28,6,22,8,44,17], [22,28,8,6]]
// let input = [[2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31], [2,42,38,0,43,21]]

let result = relativeSortArray(...input);

console.log(result);