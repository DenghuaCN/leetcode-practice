/**
  假设 Andy 和 Doris 想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示。

  你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设答案总是存在。

  示例 1:
  输入: list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
  输出: ["Shogun"]
  解释: 他们唯一共同喜爱的餐厅是“Shogun”。

  示例 2:
  输入:list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]，list2 = ["KFC", "Shogun", "Burger King"]
  输出: ["Shogun"]
  解释: 他们共同喜爱且具有最小索引和的餐厅是“Shogun”，它有最小的索引和1(0+1)。

  提示:

  1 <= list1.length, list2.length <= 1000
  1 <= list1[i].length, list2[i].length <= 30 
  list1[i] 和 list2[i] 由空格 ' ' 和英文字母组成。
  list1 的所有字符串都是 唯一 的。
  list2 中的所有字符串都是 唯一 的。
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
let findRestaurant2 = function(list1, list2) {
  let set1 = new Map();
  let set2 = new Map();
  let intersection = new Map();

  for (let i = 0; i < list1.length; i++) {
    set1.set(list1[i], i);
  }
  for (let i = 0; i < list2.length; i++) {
    set2.set(list2[i], i);
  }

  for (const [key, value] of set1) {
    if (set2.has(key)) {
      intersection.set(key, value + set2.get(key));
    }
  }

  let minKeys = [];
  let minValue = Number.MAX_SAFE_INTEGER;

  for (const [key, value] of intersection) {
    if (value < minValue) {
      minValue = value;
    }
  }

  for (const [key, value] of intersection) {
    if (minValue === value) {
      minKeys.push(key);
    }
  }

  return minKeys;
};

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
let findRestaurant = function(list1, list2) {
  let ans = [];
  let minIndexSum = Number.MAX_SAFE_INTEGER;
  let LIST1_MAP = new Map();

  for (let i = 0; i < list1.length; i++) {
    LIST1_MAP.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    if (LIST1_MAP.has(list2[i])) {
      let thisTimeIndexSum = i + LIST1_MAP.get(list2[i]);

      if (thisTimeIndexSum === minIndexSum) { // 含有第二个相同的最小和索引单词，则存入结果数组
        ans.push(list2[i]);
      } else if (thisTimeIndexSum < minIndexSum) { // 找到比之前更小的最小和索引单词，更新结果数组
        ans = [list2[i]];
        minIndexSum = thisTimeIndexSum;
      }
    }
  }

  return ans;
};


let input = [["Shogun","Piatti","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]];
// let input = [["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]]

let result = findRestaurant(...input);

console.log(result);