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

  append(value) {
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
    let slow = this.head;
    let fast = this.head;
    let stack = [];

    while (fast && fast.next) {
      stack.push(slow.value);
      slow = slow.next;
      fast = fast.next.next;
    }

    // If the linked list has an odd number of elements,
    // skip the middle node
    if (fast) {
      slow = slow.next;
    }

    while (slow) {
      if (stack.pop() !== slow.value) {
        return false;
      }
      slow = slow.next;
    }

    return true;
  }
}
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(2);
linkedList.append(1);
console.log(linkedList.isPalindrome()); // Output: true
