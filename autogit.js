class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isPalindromeLinkedList(head) {
  let values = [];
  let current = head;

  // Store node values in an array
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  let left = 0;
  let right = values.length - 1;

  // Compare values at left and right pointers
  while (left < right) {
    if (values[left] !== values[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Test the implementation
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isPalindromeLinkedList(node1)); // Output: true
