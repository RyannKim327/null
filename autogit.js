function isLinkedListPalindrome(head) {
  // Step 1: Define function
  let fast = head;
  let slow = head;
  let stack = [];

  // Step 2: Initialize pointers

  while (fast !== null && fast.next !== null) {
    // Step 3: Traverse and push values into stack
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast !== null) {
    // Step 4: If length is odd, move slow pointer one step forward
    slow = slow.next;
  }

  while (slow !== null) {
    // Step 5: Compare values
    if (slow.val !== stack.pop()) {
      return false;
    }
    slow = slow.next;
  }

  return true;
}
