// Definition of a LinkedList Node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Function to check if a LinkedList is a palindrome
function isLinkedListPalindrome(head) {
  if (!head || !head.next) {
    return true; // An empty list or single element list is considered a palindrome
  }

  let slow = head;
  let fast = head;

  // Use fast and slow pointers to find the middle of the LinkedList
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse the second half of the LinkedList
  let reversedSecondHalf = reverseLinkedList(slow);

  fast = head;
  slow = reversedSecondHalf;

  // Compare values of the first and reversed second half of the LinkedList
  while (slow) {
    if (fast.value !== slow.value) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }

  return true;
}

// Helper function to reverse a LinkedList from a given node
function reverseLinkedList(node) {
  let prev = null;
  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
}
// Example usage
const node1 = new Node('R');
const node2 = new Node('A');
const node3 = new Node('C');
const node4 = new Node('E');
const node5 = new Node('C');
const node6 = new Node('A');
const node7 = new Node('R');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

console.log(isLinkedListPalindrome(node1)); // Output: true
