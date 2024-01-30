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

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  isPalindrome() {
    const stack = [];
    let fast = this.head;
    let slow = this.head;

    // Push the first half of the list into the stack
    while (fast && fast.next) {
      stack.push(slow.value);
      slow = slow.next;
      fast = fast.next.next;
    }

    // Handle odd number of elements
    if (fast) {
      slow = slow.next;
    }

    // Compare second half of the list with stack
    while (slow) {
      const top = stack.pop();
      if (slow.value !== top) {
        return false;
      }
      slow = slow.next;
    }

    return true;
  }
}
const linkedList = new LinkedList();
linkedList.add('a');
linkedList.add('b');
linkedList.add('c');
linkedList.add('b');
linkedList.add('a');

console.log(linkedList.isPalindrome()); // Output: true
