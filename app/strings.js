stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let newStr = '';
    let cadTemp = '';
    for (let index = 0; index < str.length; index++) {
      const chartCad = str.charAt(index);

      if(cadTemp != chartCad) {
        cadTemp = chartCad;
        let newStrTemp = chartCad.repeat(amount);
        if(str.includes(newStrTemp, index)) {
          newStr += newStrTemp;
        } else {
          newStr += chartCad;
        }
      }
    }

    return newStr;
  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'cba'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
  },
};
