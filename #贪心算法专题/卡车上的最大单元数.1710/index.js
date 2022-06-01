/**
  请你将一些箱子装在 一辆卡车 上。给你一个二维数组 boxTypes ，其中 boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi] ：

  numberOfBoxesi 是类型 i 的箱子的数量。
  numberOfUnitsPerBoxi 是类型 i 每个箱子可以装载的单元数量。
  整数 truckSize 表示卡车上可以装载 箱子 的 最大数量 。只要箱子数量不超过 truckSize ，你就可以选择任意箱子装到卡车上。

  返回卡车可以装载 单元 的 最大 总数。

  示例 1：
  输入：boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
  输出：8
  解释：箱子的情况如下：
  - 1 个第一类的箱子，里面含 3 个单元。
  - 2 个第二类的箱子，每个里面含 2 个单元。
  - 3 个第三类的箱子，每个里面含 1 个单元。
  可以选择第一类和第二类的所有箱子，以及第三类的一个箱子。
  单元总数 = (1 * 3) + (2 * 2) + (1 * 1) = 8

  示例 2：
  输入：boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
  输出：91

  提示：
  1 <= boxTypes.length <= 1000
  1 <= numberOfBoxesi, numberOfUnitsPerBoxi <= 1000
  1 <= truckSize <= 10^6

 */

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
let maximumUnits2 = function(boxTypes, truckSize) {

  // 将箱子按单元格数量降序排序
  boxTypes = boxTypes.sort((a, b) => {
    return b[1] - a[1];
  })

  let maxUnit = 0;
  let curTruckSize = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    const [everyTimeBoxCount, everyTimeBoxCeil] = boxTypes[i];

    if (curTruckSize < truckSize) {
      // 在当前的剩余容量(truckSize - curTruckSize)下，还能装多少个当前箱子(everyTimeBoxCount)
      let remainSize = truckSize - curTruckSize; // 余量

      if (remainSize > everyTimeBoxCount) { // 当前类型的箱子数量无法达成最优，全部装入，进入下一次分配。
        curTruckSize += everyTimeBoxCount;
        maxUnit += (everyTimeBoxCount * everyTimeBoxCeil);
        continue;
      } else if (remainSize === everyTimeBoxCount) { // 当前类型的箱子数量恰好最优
        curTruckSize += everyTimeBoxCount;
        maxUnit += (everyTimeBoxCount * everyTimeBoxCeil);
        return maxUnit;
      } else { // 当前类型的箱子数量满足最优且富足
        curTruckSize += remainSize;
        maxUnit += remainSize * everyTimeBoxCeil;
        return maxUnit;
      }
    }
  }

  // 这里要return，存在一种可能，所有箱子数量加起来都小于 truckSize。
  return maxUnit;
};


/**
 * 优化
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 let maximumUnits = function(boxTypes, truckSize) {
  boxTypes = boxTypes.sort((a, b) => {
    return b[1] - a[1];
  })

  let maxUnit = 0;

  for (let i = 0; i < boxTypes.length; i++) {
    const [everyTimeBoxCount, everyTimeBoxCeil] = boxTypes[i];

    if (truckSize >= everyTimeBoxCount) {
      maxUnit += everyTimeBoxCount * everyTimeBoxCeil;
      truckSize = (truckSize - everyTimeBoxCount);
    } else {
      maxUnit += truckSize * everyTimeBoxCeil;
      truckSize -= truckSize;
    }
  }

  return maxUnit;
};


// let input = [[[1,3],[2,2],[3,1]], 4];
// let input = [[[5,10],[2,5],[4,7],[3,9]], 10];
let input = [[[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 35];

let result = maximumUnits(...input);

console.log(result);