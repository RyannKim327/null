class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
function findNthFromEnd(head, n) {
  /* Implementation goes here */
}
function findNthFromEnd(head, n) {
  let fast = head;
  let slow = head;
}
function findNthFromEnd(head, n) {
  let fast = head;
  let slow = head;

  // Move fast pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null; // If n is greater than the length of the list, return null
    }
    fast = fast.next;
  }
}
function findNthFromEnd(head, n) {
  let fast = head;
  let slow = head;

  // Move fast pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null; // If n is greater than the length of the list, return null
    }
    fast = fast.next;
  }

  // Move both pointers together until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}
function findNthFromEnd(head, n) {
  let fast = head;
  let slow = head;

  // Move fast pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null; // If n is greater than the length of the list, return null
    }
    fast = fast.next;
  }

  // Move both pointers together until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}
