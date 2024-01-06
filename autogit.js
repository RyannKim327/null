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
    if (this.head === null) {
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
    if (this.head === null || this.head.next === null) {
      return true; // An empty or single-node linked list is always a palindrome
    }

    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    let start = 0;
    let end = values.length - 1;
    while (start < end) {
      if (values[start] !== values[end]) {
        return false;
      }
      start++;
      end--;
    }

    return true;
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

console.log(linkedList.isPalindrome()); // Output: true

linkedList.add(5);

console.log(linkedList.isPalindrome()); // Output: false
