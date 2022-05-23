/**
给你一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。

题目数据保证线路图会形成一条不存在循环的线路，因此恰有一个旅行终点站。

示例 1：
输入：paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
输出："Sao Paulo"
解释：从 "London" 出发，最后抵达终点站 "Sao Paulo" 。本次旅行的路线是 "London" -> "New York" -> "Lima" -> "Sao Paulo" 。

示例 2：
输入：paths = [["B","C"],["D","B"],["C","A"]] // b-c-a || d-b-c-a | c-a
输出："A"
解释：所有可能的线路是：
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
显然，旅行终点站是 "A" 。

示例 3：
输入：paths = [["A","Z"]]
输出："Z"
 
提示：
1 <= paths.length <= 100
paths[i].length == 2
1 <= cityAi.length, cityBi.length <= 10
cityAi != cityBi
所有字符串均由大小写英文字母和空格字符组成。
 */

/**
 * @param {string[][]} paths
 * @return {string}
 */
let destCity = function(paths) {

  let startPoints = new Set(),
      endPoints = new Set(),
      i = 0;

  while (i < paths.length) {
    let cityAi = paths[i][0];
    let cityBi = paths[i][1];
    startPoints.add(cityAi);
    endPoints.add(cityBi);

    // 如果在终点城市集合 中 发现起点城市，则此城市不为唯一终点
    if (endPoints.has(cityAi)) {
      endPoints.delete(cityAi);
    }
    // 如果在起点城市集合 中 发现终点城市，则此城市不为唯一终点
    if (startPoints.has(cityBi)) {
      endPoints.delete(cityBi);
    }

    i++;

  }

  let ans = Array.from(endPoints);

  return ans[0];
};


// let input = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]];
// let input = [["B","C"],["D","B"],["C","A"]];
// let input = [["A","Z"]];
let input = [["qMTSlfgZlC","ePvzZaqLXj"],["xKhZXfuBeC","TtnllZpKKg"],["ePvzZaqLXj","sxrvXFcqgG"],["sxrvXFcqgG","xKhZXfuBeC"],["TtnllZpKKg","OAxMijOZgW"]];

let result = destCity(input);

console.log(result);