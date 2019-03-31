/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
arraysAnswers = {
  /**
   * Find the 0 based index of item in arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to find in arr
   * @returns {Number} The index of item in arr, or -1 if item is not in arr.
   */
  indexOf: function indexOf(arr, item) {
    // Implement a function, that returns the 0 based index of an element in an array.
    return arr.indexOf(item);
  },

  /**
   * Determine the sum of the items of arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number} The numerical sum of all items in arr.
   */
  sum: function sum(arr) {
    // eslint-disable-next-line arrow-body-style
    const value = arr.reduce((count, currentValue) => {
      return count + currentValue;
    }, 0);
    return value;
  },

  /**
   * Create a new array with the same items as arr, excluding item
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  remove: function remove(arr, item) {
    return arr.filter(number => number !== item);
  },

  /**
   * Create a new array with the same items as arr, excluding item
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be excluded from the new array
   * @returns {Number[]} A new array containing all numbers from arr except item.
   */
  removeWithoutCopy: function removeWithoutCopy(arr, item) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },

  /**
   * Adds a number, item, to the end of an array, arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be appended to the end of arr
   * @returns {Number[]} The array arr, with item appended.
   */
  append: function append(arr, item) {
    arr.push(item);
    return arr;
  },

  /**
   * Removes a number, item, from the end of an array, arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the last element removed..
   */
  truncate: function truncate(arr) {
    arr.pop();
    return arr;
  },

  /**
   * Adds a number, item, to the beginning of an array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to append to the beginning of arr.
   * @returns {Number[]} The array arr, with the first element item added
   */
  prepend: function prepend(arr, item) {
    return [item, ...arr]; // or arr.unshift(item);
  },


  /**
   * Removes the first element from an array
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} The array arr, with the first element item removed.
   */
  curtail: function curtail(arr) {
    return [...arr.slice(0, 0), ...arr.slice(1)];
  },

  /**
   * Combines the two arrays arr1 and arr2 together
   *
   * @param {Number[]} arr1 - An array of numbers
   * @param {Number[]} arr2 - An array of numbers
   * @returns {Number[]} A new array, with elements from arr1 and arr2 in that order.
   */
  concat: function concat(arr1, arr2) {
    return arr1.concat(arr2);// or arr1.unshift(arr2.join(', '));
  },

  /**
   * Insert a number item into an array arr at the 0 based position index.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to be inerted into arr
   * @param {Number} index - A 0 based index into the array arr.
   * @returns {Number[]} The array arr, with the number item inserted at position index.
   */
  insert: function insert(arr, item, index) {
    return [...arr.slice(0, index), item, ...arr.slice(index)];
  },

  /**
   * Counts the number of times a number item appears in an array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} item - A number to count in arr
   * @returns {Number} The count of the number of times the number item appeared in arr.
   */
  count: function count(arr, item) {
    // eslint-disable-next-line
    const occurs = arr.reduce((cant, currentValue) => {
      // eslint-disable-next-line no-return-assign no-param-reassign
      if (currentValue === item) {
        // eslint-disable-next-line no-plusplus
        cant++;
      }
      return cant;
    }, 0);

    return occurs;
  },

  /**
   * Determines the number of duplicated numbers in the array arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} An array of numbers that appear in arr more than once.
   */
  duplicates: function duplicates(arr) {
    const object = {};
    const result = [];
    arr = arr.sort((a, b) => a - b);
    arr.forEach((i) => {
      if (!object[i]) {
        object[i] = 0;
      }
      object[i] += 1;
    });

    // eslint-disable-next-line no-restricted-syntax
    for (const prop in object) {
      if (object[prop] >= 2) {
        // eslint-disable-next-line radix
        result.push(parseInt(prop));
      }
    }
    return result;
  },

  /**
   * Squares each number in an array arr. Example: square([1, 2, 3]) returns [1, 4, 9].
   *
   * @param {Number[]} arr - An array of numbers
   * @returns {Number[]} A new array of numbers that contains the elements of arr squared.
   */
  square: function square(arr) {
    // eslint-disable-next-line arrow-body-style
    return arr.map(num => num * num);
  },

  /**
   * Finds the indices of the occurrences of a number target in an array of numbers arr.
   *
   * @param {Number[]} arr - An array of numbers
   * @param {Number} target - A number to find all occurences of.
   * @returns {Number[]} A new array of numbers which represent the indices of target in arr.
   */
  findAllOccurrences: function findAllOccurrences(arr, target) {
    const arrNew = [];
    // eslint-disable-next-line consistent-return
    // eslint-disable-next-line array-callback-return
    arr.forEach((num, index) => {
      if (num === target) {
        arrNew.push(index);
      }
    });
    return arrNew;
  },
};
