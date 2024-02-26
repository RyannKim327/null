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

  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  isEqual(otherList) {
    let currentA = this.head;
    let currentB = otherList.head;

    while (currentA && currentB) {
      if (currentA.data !== currentB.data) {
        return false;
      }
      currentA = currentA.next;
      currentB = currentB.next;
    }

    return !currentA && !currentB;
  }

  isPalindrome() {
    const reversedList = new LinkedList();

    let current = this.head;
    while (current) {
      reversedList.add(current.data);
      current = current.next;
    }

    reversedList.reverse();

    return this.isEqual(reversedList);
  }
}

// Test the implementation
const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(2);
ll.add(1);

console.log(ll.isPalindrome()); // Output: true
