class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function isPalindrome(head) {
  // Slow and fast pointers to find the middle of the linked list
  let slow = head;
  let fast = head;

  // Use a stack to store the first half of the linked list nodes (reversed)
  const stack = [];

  // Push the elements of the first half into the stack
  while (fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  // If fast is not null, the linked list has an odd length
  // Move slow pointer to skip the middle element
  if (fast !== null) {
    slow = slow.next;
  }

  // Compare the remaining elements of the second half with the stack
  while (slow !== null) {
    if (slow.val !== stack.pop()) {
      return false; // Not a palindrome
    }
    slow = slow.next;
  }

  return true; // Palindrome
}
// Example linked list: 1 -> 2 -> 3 -> 2 -> 1
const node5 = new ListNode(1);
const node4 = new ListNode(2, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(isPalindrome(node1)); // Output: true
