class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function isLinkedListPalindrome(head) {
  if (head === null || head.next === null) {
    return true; // An empty list or a list with a single node is considered a palindrome
  }

  let slow = head;
  let fast = head;

  // Traverse the list until the end or node after the end
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let prev = null;
  let curr = slow.next;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Reset the pointers for comparison
  fast = head;
  slow.next = prev;
  slow = slow.next;

  // Compare the values of first half and reversed second half
  while (slow !== null) {
    if (fast.val !== slow.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }

  return true;
}
// Sample linked list: 1 -> 2 -> 3 -> 2 -> 1
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isLinkedListPalindrome(head)); // Output: true
