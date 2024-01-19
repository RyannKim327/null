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
    // Convert the linked list to an array
    const array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }

    // Check if the array is a palindrome
    const length = array.length;
    for (let i = 0; i < length / 2; i++) {
      if (array[i] !== array[length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
console.log(linkedList.isPalindrome()); // Output: true
