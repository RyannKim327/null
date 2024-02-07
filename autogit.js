function findNthNodeFromEnd(head, n) {
  let slow = head;
  let fast = head;

  // Move the fast pointer n positions ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null; // n is greater than the length of the linked list
    }
    fast = fast.next;
  }

  // Move both pointers until the fast pointer reaches the end
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow.value;
}
