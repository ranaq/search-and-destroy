'use strict';

// Complete this algo
const minJumps = arr => {
  let totalJumps = 0;
  let pointer = 0;
  let jumpLength;
  if (arr.length <= 1) {
    return 0;
  }
  if (arr[pointer] >= arr.length - 1) return 1;
  while (pointer < arr.length - 1) {
    if (arr[pointer] + pointer >= arr.length - 1) return totalJumps + 1;
    let maxIdx = 0;
    jumpLength = arr[pointer];
    for (let i = pointer + 1; i < jumpLength + pointer + 1; i++) {
      if (arr[i] > arr[maxIdx]) {
        maxIdx = i;
      }
    }
    pointer = maxIdx;
    totalJumps++;
  }
  return totalJumps;
};

module.exports = minJumps;
