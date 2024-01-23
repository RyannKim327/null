class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function isPalindrome(head) {
  if (!head || !head.next) {
    return true;
  }

  let slow = head;
  let fast = head;

  // Find the middle of the list
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half of the list
  slow.next = reverseList(slow.next);
  slow = slow.next;

  // Compare values of nodes
  while (slow) {
    if (head.val !== slow.val) {
      return false;
    }
    head = head.next;
    slow = slow.next;
  }

  return true;
}

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
