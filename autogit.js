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
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
  }

  isPalindrome() {
    let slow = this.head;
    let fast = this.head;
    const stack = [];

    while (fast && fast.next) {
      stack.push(slow.value);
      slow = slow.next;
      fast = fast.next.next;
    }

    if (fast) {
      slow = slow.next;
    }

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
// Create a linked list
const list = new LinkedList();

// Add elements to the linked list
list.add('r');
list.add('a');
list.add('d');
list.add('a');
list.add('r');

// Check if it's a palindrome
console.log(list.isPalindrome());  // Output: true
