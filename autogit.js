class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function isPalindrome(head) {
  let values = [];

  while (head) {
    values.push(head.value);
    head = head.next;
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

// Example usage:
const node1 = new Node('a');
const node2 = new Node('b');
const node3 = new Node('c');
const node4 = new Node('b');
const node5 = new Node('a');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isPalindrome(node1)); // Output: true
