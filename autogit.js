function reverseLinkedList(node) {
  let prev = null;
  let current = node;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
function findMiddleNode(node) {
  let slow = node;
  let fast = node;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
function isLinkedListPalindrome(head) {
  if (head == null || head.next == null) {
    return true; // Empty or single-node list is a palindrome
  }

  // Find the middle node
  const middle = findMiddleNode(head);

  // Reverse the second half of the list starting from the middle node
  const reversed = reverseLinkedList(middle);

  // Compare the reversed second half with the first half
  let current1 = head;
  let current2 = reversed;
  while (current1 != null && current2 != null) {
    if (current1.value !== current2.value) {
      return false; // Nodes don't match, not a palindrome
    }
    current1 = current1.next;
    current2 = current2.next;
  }

  return true; // All nodes matched, it's a palindrome
}
