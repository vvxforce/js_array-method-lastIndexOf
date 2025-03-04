'use strict';

/**
 * Implement method lastIndexOf
 */
function applyCustomLastIndexOf() {
  [].__proto__.lastIndexOf2 = function(searchElement, fromIndex = this.length) {
    let from = fromIndex;
    if (arguments.length === 0) {
      return -1;
    }
    if (from < 0) {
      from = fromIndex + this.length;
    }
    if (from < 0) {
      from = 0;
    }
    for (let i = from; i >= 0; i--) {
      if (this[i] === searchElement
         || (Number.isNaN(this[i]) && Number.isNaN(searchElement))) {
        return i;
      }
    }
    return -1;
  };
}
module.exports = applyCustomLastIndexOf;
