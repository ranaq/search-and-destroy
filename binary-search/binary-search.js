'use strict';

// Complete this algo
// const binarySearch = (array, target) => {
//   if (array.length === 0) {
//     return false;
//   }
//   if (array.length === 1) {
//     return array[0] === target;
//   }
//   let half = Math.floor(array.length / 2);
//   if (array[half] === target) {
//     return true;
//   } else {
//     if (target >= array[half]) {
//       let half1 = array.slice(half, array.length);
//       return binarySearch(half1, target);
//     } else {
//       let half2 = array.slice(0, half);
//       return binarySearch(half2, target);
//     }
//   }
// };

const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  setTimeout(() => {
    console.log('start (at start)', start, 'end', end);
  }, 500);
  if (array.length === 0) {
    return false;
  }
  if (end - start === 1) {
    return array[end] === target || array[start] === target;
  }
  // console.log('start', start, 'end', end);
  setTimeout(() => {
    console.log('start', start, 'end', end);
  }, 500);
  let half = Math.floor((end - start) / 2) + start;
  if (array[half] === target) {
    return true;
  } else {
    if (target > array[half]) {
      // console.log('target', target, 'array at half', array[half]);
      setTimeout(() => {
        console.log('target', target, 'array at half', array[half]);
      }, 500);
      return binarySearch(array, target, half, end);
    } else {
      return binarySearch(array, target, start, half);
    }
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
