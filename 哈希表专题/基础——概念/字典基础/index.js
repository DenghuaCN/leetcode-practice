/**
 * 字典中，存储的是键值对，，其中键名用于查询特定元素
 */

class Dictionary {
  constructor() {
    this.items = {};
  }

  /**
   * 向字典中添加新元素
   * @param {*} key 键名
   * @param {*} value 键值
   */
  set(key, value) {
    this.items[key] = value;
  }

  /**
   * 通过键名删除对应的数据值
   * @param {*} key
   */
  delete(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }

    return false;
  }

  /**
   * 如果某个键名存在于字典中，则返回true，否则返回false
   * @param {*} key
   */
  has(key) {
    return this.items.hasOwnProperty(key);
  }

  /**
   * 通过某个键名查找对应的值并返回
   * @param {*} key
   */
  get(key) {
    if (this.has(key)) {
      return this.items[key];
    }

    return undefined;
  }

  /**
   * 将字典中所有元素全部删除
   */
  clear() {
    this.items = {};
  }

  /**
   * 返回字典的大小
   * @return {number}
   */
  size() {
    return this.keys().length;
  }

  /**
   * 将字典中所有键名组成数组并返回
   * @return {array}
   */
  keys() {
    return Object.keys(this.items);
  }

  /**
   * 将字典中所有数值组成数组并返回
   * @return {array}
   */
  values() {
    let values = [];

    for (const key in this.items) {
      if (this.has(key)) {
        values.push(this.items[key]);
      }
    }

    return values;
  }

}


let dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsonw@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));

dictionary.delete('John');

console.log(dictionary.keys());
console.log(dictionary.values());
