'use strict';

//Complete this algo
const isLoop = linkedlist => {
  let store = {};
  let currNode = linkedlist.head;
  // console.log('currNode', currNode);
  while (currNode.next) {
    if (store[currNode.next.value]) {
      return currNode.next.value;
    }
    store[currNode.value] = true;
    currNode = currNode.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
