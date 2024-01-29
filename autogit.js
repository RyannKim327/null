class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function isPalindrome(head) {
  // Base case: empty list or single node list is a palindrome
  if (!head || !head.next) {
    return true;
  }

  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let prev = null;
  let curr = slow;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Step 3: Compare the reversed second half with the first half
  let left = head;
  let right = prev;

  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }

  return true;
}
// Sample linked list
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true

// Another sample linked list
const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);

console.log(isPalindrome(head2)); // Output: false
