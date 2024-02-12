class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function isLinkedListPalindrome(head) {
  if (!head || !head.next) {
    return true; // Empty or single-node list is a palindrome
  }

  // Step 2: Find the middle of the linked list
  let slowPtr = head;
  let fastPtr = head;
  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  // Step 4: Reverse the second half of the linked list
  let prev = null;
  let current = slowPtr.next;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // Step 5: Compare the first half with the reversed second half
  let firstHalfPtr = head;
  let secondHalfPtr = prev;
  while (secondHalfPtr) {
    if (firstHalfPtr.val !== secondHalfPtr.val) {
      return false;
    }
    firstHalfPtr = firstHalfPtr.next;
    secondHalfPtr = secondHalfPtr.next;
  }

  return true;
}
