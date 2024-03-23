class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isPalindrome(head) {
  let values = [];
  
  // Traverse the linked list and store values in an array
  let current = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  
  let start = 0;
  let end = values.length - 1;

  // Compare values using two pointers
  while (start < end) {
    if (values[start] !== values[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

// Test the isPalindrome function
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isPalindrome(node1)); // Output: true
