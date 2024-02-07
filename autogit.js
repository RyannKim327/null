function isPalindrome(head) {
  if (!head || !head.next) {
    // An empty list or a single node is considered a palindrome
    return true;
  }

  let slow = head;
  let fast = head;
  let prev = null;

  // Use the two-pointer technique to find the middle node
  while (fast && fast.next) {
    fast = fast.next.next;

    // Reverse the first half of the remaining linked list
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // If the linked list has an odd number of nodes, skip the middle node
  if (fast) {
    slow = slow.next;
  }

  // Compare the first and second halves of the linked list
  while (prev) {
    if (prev.val !== slow.val) {
      // The values don't match, so it's not a palindrome
      return false;
    }
    prev = prev.next;
    slow = slow.next;
  }

  // All the values match, so it's a palindrome
  return true;
}
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
