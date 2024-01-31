class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function isPalindrome(head) {
  if (!head || !head.next) {
    return true; // an empty list or a list with a single node is considered a palindrome
  }
  
  // Step 1: Find the middle of the linked list using slow and fast pointers
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // Step 2: Reverse the second half of the linked list
  let prev = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Step 3: Compare the reversed second half with the first half
  while (prev) {
    if (prev.val !== head.val) {
      return false; // the list is not a palindrome
    }
    prev = prev.next;
    head = head.next;
  }

  return true; // the list is a palindrome
}
// Example usage

// Create a palindrome linked list: 1 -> 2 -> 3 -> 2 -> 1
const node5 = new ListNode(1);
const node4 = new ListNode(2, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(isPalindrome(node1)); // Output: true
