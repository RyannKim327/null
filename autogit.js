function isLinkedListPalindrome(head) {
  // Step 2: Find the middle node
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 4: Reverse the second half of the linked list
  let prev = null;
  let curr = slow;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Step 5: Reset the fast pointer to the head
  fast = head;

  // Step 6: Compare the values
  while (prev !== null) {
    if (prev.val !== fast.val) {
      return false;
    }
    prev = prev.next;
    fast = fast.next;
  }

  // Step 8: Linked list is a palindrome
  return true;
}
