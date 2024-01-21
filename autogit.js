class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
function isLinkedListPalindrome(head) {
  let slow = head;
  let fast = head;

  // Find the middle of the linked list using slow and fast pointers
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let secondHalf = reverseLinkedList(slow);
  let firstHalf = head;

  // Compare the first half and reversed second half of the linked list
  while (secondHalf !== null) {
    if (firstHalf.value !== secondHalf.value) {
      return false;
    }

    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
}
// Example: 1 -> 2 -> 3 -> 2 -> 1
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

console.log(isLinkedListPalindrome(head)); // Output: true
