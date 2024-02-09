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

  push(value) {
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
linkedList.push('a');
linkedList.push('b');
linkedList.push('c');
linkedList.push('b');
linkedList.push('a');

console.log(linkedList.isPalindrome()); // Output: true
