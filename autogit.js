class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
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
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.data);
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

// Example usage
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

console.log(linkedList.isPalindrome()); // Output: true
