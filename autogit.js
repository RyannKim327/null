class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function isLinkedListPalindrome(head) {
  // Step 1: Find the midpoint of the linked list
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let prev = null;
  let current = slow;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  let secondHalf = prev;

  // Step 3: Compare the first and second halves of the linked list
  let firstHalf = head;
  while (secondHalf !== null) {
    if (firstHalf.value !== secondHalf.value) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
}
// Test case 1
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(1);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
console.log(isLinkedListPalindrome(node1)); // true

// Test case 2
let node6 = new Node(1);
let node7 = new Node(2);
let node8 = new Node(3);
let node9 = new Node(4);
let node10 = new Node(5);
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;
console.log(isLinkedListPalindrome(node6)); // false
