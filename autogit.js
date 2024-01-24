class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  let following = head;

  while (current !== null) {
    following = following.next;
    current.next = previous;
    previous = current;
    current = following;
  }

  return previous;
}
function isLinkedListPalindrome(head) {
  if (!head || !head.next) {
    // A linked list with 0 or 1 node is always a palindrome
    return true;
  }

  // Find the middle of the linked list using the two-pointer technique
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // If the length of the linked list is odd, move slow pointer one step ahead
  if (fast) {
    slow = slow.next;
  }

  // Reverse the second half of the linked list
  let reversed = reverseLinkedList(slow);

  // Compare the first half (head) and reversed second half of the linked list
  while (reversed) {
    if (reversed.value !== head.value) {
      return false;
    }
    reversed = reversed.next;
    head = head.next;
  }

  return true;
}
// Create nodes for the linked list
const node1 = new Node('r');
const node2 = new Node('a');
const node3 = new Node('c');
const node4 = new Node('e');
const node5 = new Node('c');
const node6 = new Node('a');
const node7 = new Node('r');

// Connect the nodes to form a linked list
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

// Check if the linked list is a palindrome
console.log(isLinkedListPalindrome(node1)); // Output: true
