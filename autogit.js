function isPalindrome(head) {
  if (!head || !head.next) {
    return true; // Empty list or single node is a palindrome
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow = reverseLinkedList(slow);

  while (head && slow) {
    if (head.val !== slow.val) {
      return false;
    }
    head = head.next;
    slow = slow.next;
  }

  return true;
}

function reverseLinkedList(node) {
  let prev = null;
  let current = node;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
