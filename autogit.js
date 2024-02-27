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

  toArray() {
    let current = this.head;
    const array = [];
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  isPalindrome() {
    const array = this.toArray();
    const reversedArray = array.slice().reverse();
    return JSON.stringify(array) === JSON.stringify(reversedArray);
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.add('a');
linkedList.add('b');
linkedList.add('c');
linkedList.add('b');
linkedList.add('a');

console.log(linkedList.isPalindrome()); // Output: true
