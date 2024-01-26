class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function isPalindrome(head) {
  if (!head || !head.next) {
    return true; // An empty list or a list with a single node is a palindrome
  }

  let slow = head;
  let fast = head;
  let prevSlow = null;

  while (fast && fast.next) {
    fast = fast.next.next; // Fast pointer moves two nodes at a time
    let temp = slow;
    slow = slow.next; // Slow pointer moves one node at a time
    temp.next = prevSlow; // Reverse the first half of the list
    prevSlow = temp;
  }

  if (fast) {
    // If the length is odd, move the slow pointer one step ahead
    slow = slow.next;
  }

  while (slow) {
    if (slow.val !== prevSlow.val) {
      return false; // Elements don't match, not a palindrome
    }
    slow = slow.next;
    prevSlow = prevSlow.next;
  }

  return true; // All elements match, it is a palindrome
}

// Example usage:
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(2);
list.next.next.next.next = new ListNode(1);

console.log(isPalindrome(list)); // Output: true
