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
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

function isPalindrome(head) {
  if (!head || !head.next) {
    return true;  // Empty or single-node linked list is a palindrome
  }

  const values = [];
  let current = head;
  
  while (current) {
    values.push(current.value);
    current = current.next;
  }

  let left = 0;
  let right = values.length - 1;

  while (left < right) {
    if (values[left] !== values[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example usage:
const linkedList = new LinkedList();
linkedList.addNode('r');
linkedList.addNode('a');
linkedList.addNode('d');
linkedList.addNode('a');
linkedList.addNode('r');

console.log(isPalindrome(linkedList.head));  // Output: true
