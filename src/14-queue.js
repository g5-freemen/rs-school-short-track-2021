/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

// const ListNode = require('../extensions/list-node');

//  function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

class Queue {
  constructor() {
    this.data = [];
  }

  get size() {
    return this.data.length;
  }

  enqueue(element) {
    return this.data.push(element);
  }

  dequeue() {
    return this.data.shift();
  }
}

module.exports = Queue;
