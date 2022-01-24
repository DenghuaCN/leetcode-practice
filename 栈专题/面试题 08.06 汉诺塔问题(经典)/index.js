/**
  在经典汉诺塔问题中，有 3 根柱子及 N 个不同大小的穿孔圆盘，盘子可以滑入任意一根柱子。
  一开始，所有盘子自上而下按升序依次套在第一根柱子上(即每一个盘子只能放在更大的盘子上面)。移动圆盘时受到以下限制:
  (1) 每次只能移动一个盘子;
  (2) 盘子只能从柱子顶端滑出移到下一根柱子;
  (3) 盘子只能叠在比它大的盘子上。

  请编写程序，用栈将所有盘子从第一根柱子移到最后一根柱子。

  你需要原地修改栈。

  示例1:
  输入：A = [2, 1, 0], B = [], C = []
  输出：C = [2, 1, 0]

  示例2:
  输入：A = [1, 0], B = [], C = []
  输出：C = [1, 0]

  提示:
  A中盘子的数目不大于14个。
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void}
 */
let hanota = (A, B, C) => {
  const n = A.length;
  // 将A中的n个移动到C
  const move = (n, A, B, C) => {
      if (n === 1) {
          C.push(A.pop());
          return;
      }

      // 将A中的n-1个移动到B
      move(n - 1, A, C, B);
      // 将A剩余的一个移动到C
      C.push(A.pop());
      // 将B中的n-1个移动到C
      move(n - 1, B, A, C);

  };
  move(n, A, B, C);

  return C;
};

let result = hanota([2,1,0], [], []);

console.log(result);
