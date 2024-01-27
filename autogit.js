class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  isPalindrome() {
    let slow = this.head;
    let fast = this.head;
    let stack = [];

    while (fast !== null && fast.next !== null) {
      stack.push(slow.value);
      slow = slow.next;
      fast = fast.next.next;
    }

    // If the list length is odd, skip the middle node
    if (fast !== null) {
      slow = slow.next;
    }

    while (slow !== null) {
      const top = stack.pop();

      if (top !== slow.value) {
        return false;
      }

      slow = slow.next;
    }

    return true;
  }
}
const linkedList = new LinkedList();

linkedList.addNode('a');
linkedList.addNode('b');
linkedList.addNode('c');
linkedList.addNode('b');
linkedList.addNode('a');

console.log(linkedList.isPalindrome()); // Output: true
