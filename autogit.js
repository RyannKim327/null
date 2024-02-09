function isPalindromeLinkedList(head) {
  let slow = head;
  let fast = head;

  // Find the middle of the linked list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let current = slow;
  let previous = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  slow = previous;

  // Compare the first and second half of the linked list
  fast = head;
  while (slow) {
    if (fast.val !== slow.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }

  return true;
}
