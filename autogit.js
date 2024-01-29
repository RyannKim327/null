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
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
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
      slow = slow.next; // Move slow pointer to the middle element for odd-length lists
    }
  
    while (slow) {
      if (slow.value !== stack.pop()) {
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

linkedList.addNode('d');

console.log(linkedList.isPalindrome()); // Output: false
