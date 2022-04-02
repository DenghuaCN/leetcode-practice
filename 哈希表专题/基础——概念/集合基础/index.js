/**
 * 集合是一组无序且唯一（即不能重复）的项组成的。这个数据结构使用了与有限集合相同的数学概念，但应用在计算机科学的数据结构中。
 *
 * 这里要实现的集合类就是以ECMAScript6中Set类的实现为基础的。
 */

class mySet {
  constructor() {
    this.items = {};
  }

  /**
   * 如果值在集合中，返回true，否则返回false。
   * @method has
   * @param {*} value
   */
  has(value) {
    return this.items.hasOwnProperty(value);
  }

  /**
   * 向集合添加一个新的项
   * @method add
   * @param {*} value
   */
  add(value) {
    if (this.has(value)) {
      return false;
    }

    this.items[value] = value; // 添加一个值的时候，把它同时作为键和值保存，这样有利于查找这个值
    return null;
  }

  /**
   * 从集合中移除一个值
   * @method remove
   */
  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return null;
    }

    return false;
  }

  /**
   * 移除集合中的所有项
   * @method clear
   */
  clear() {
    this.items = {}; // 也可以迭代集合，依次移除所有项
    return null;
  }

  /**
   * 返回集合内项总数
   * @method size
   * @return {number}
   */
  size() {
    let count = 0;

    for (const key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }

    return count;
  }

  /**
   * 返回一个包含集合中所有项的数组
   * @method values
   * @return {array}
   */
  values() {
    let values = [];

    let i = 0;
    let keys = Object.keys(this.items);

    while (i < keys.length) {
      values.push(this.items[keys[i]])
      i++;
    }

    return values;
  }
}

// 测试
let set = new mySet();
set.add(1);
console.log(set.add(2));
console.log(set.values());

console.log(set.remove(1));
console.log(set.has(1));
console.log(set.values());