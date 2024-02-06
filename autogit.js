function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function isLinkedListPalindrome(head) {
  if (!head || !head.next) {
    // Empty or single node list is a palindrome
    return true;
  }

  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reverseHead = null,
    node = slow;
  while (node) {
    const temp = node.next;
    node.next = reverseHead;
    reverseHead = node;
    node = temp;
  }

  let left = head,
    right = reverseHead;
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
}
