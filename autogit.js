// Linked list node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Function to check if a linked list is a palindrome
function isPalindrome(head) {
  let values = [];
  let current = head;

  // Traverse the linked list and push node values to an array
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  // Create a reversed copy of the array
  let reversed = values.slice().reverse();

  // Compare the original array with the reversed array
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== reversed[i]) {
      return false;
    }
  }

  return true;
}

// Example linked list
const node1 = new Node('a');
const node2 = new Node('b');
const node3 = new Node('a');

node1.next = node2;
node2.next = node3;

// Check if the linked list is a palindrome
console.log(isPalindrome(node1)); // Output: true
