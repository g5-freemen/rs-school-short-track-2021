/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the value to the queue
 * queue.enqueue(3); // adds the value to the queue
 * queue.dequeue(); // returns the top value from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  enqueue(element) {
    const node = new ListNode(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  dequeue() {
    let current = this.head;

    if (current) {
      const elm = current.value;
      current = current.next;
      this.head = current;
      this.length--;
      return elm;
    }

    return null;
  }
}

module.exports = Queue;
