// 1. && 2.
const flag1 = hasElem(['a', 'b', 'c', 'd', 'e'], 'c');
const flag2 = hasElem(['a', 'b', 'r', 'd', 'e'], 'c');

console.log('1.1. hasElem([\'a\', \'b\', \'c\', \'d\', \'e\'], "c") = ', flag1);
console.log('1.1. hasElem([\'a\', \'b\', \'r\', \'d\', \'e\'], "c") = ', flag2);

/**
 *
 * @param {array} arr
 * @param {*} elem
 * @returns {boolean}
 */
function hasElem (arr, elem) {
  for (const arrElem of arr) {
    if (arrElem === elem) {
      return true;
    }
  }
  return false;
}

// 3.
const flag3 = hasElem([1, 2, 3, 4, 5, 6, 7], 5);
const flag4 = hasElem([1, 2, 3, 4, 10, 6, 7], 5);

console.log('3.1. hasElem([1, 2, 3, 4, 5, 6, 7], 5) = ', flag3);
console.log('3.2. hasElem([1, 2, 3, 4, 10, 6, 7], 5) = ', flag4);

// 4.

console.log('4.1. isSimpleNumber(31) = ', isSimpleNumber(31));
console.log('4.2. isSimpleNumber(24) = ', isSimpleNumber(24));

/**
 *
 * @param {number} number
 * @returns {boolean}
 */
function isSimpleNumber (number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// 5.

const flag5 = isDoubleElem([1, 2, 3, 4, 5]);
const flag6 = isDoubleElem([1, 2, 3, 3, 5, 5]);

console.log('5.1. isDoubleElem([1, 2, 3, 4, 5]) = ', flag5);
console.log('5.2. isDoubleElem([1, 2, 3, 3, 5, 5]) = ', flag6);

/**
 *
 * @param {array} array
 * @returns {boolean}
 */
function isDoubleElem (array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i-1]){
      return true;
    }
  }
  return false;
}
