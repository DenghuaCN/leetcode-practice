/**
 * 构造链表
 * @param {*} linkedListInstance
 * @param {array} linkedListInput
 * @returns {*} linkedListInstance
 */
let construct = (linkedListInstance, input) => {
  for (let i = 0; i < input.length; i++) {
    linkedListInstance.append(input[i]);
  }
  return linkedListInstance;
}

module.exports = construct;
