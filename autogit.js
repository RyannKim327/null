function ListNode(val) {
  this.val = val;
  this.next = null;
}

function isLinkedListPalindrome(head) {
  let slow = head;
  let fast = head;
  const stack = [];

  // Find the middle of the linked list
  while (fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    // The linked list is odd in length, skip the middle node
    slow = slow.next;
  }

  // Traverse the remaining nodes and compare with stack values
  while (slow) {
    if (slow.val !== stack.pop()) {
      return false;
    }
    slow = slow.next;
  }

  return true;
}
