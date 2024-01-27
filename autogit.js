function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
function isLinkedListPalindrome(head) {
  // Find the middle point of the linked list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let rev = reverseLinkedList(slow);
  
  // Compare the original and reversed halves
  while (rev) {
    if (rev.val !== head.val) {
      return false;
    }
    rev = rev.next;
    head = head.next;
  }
  return true;
}
// Define the ListNode class to represent a node in the linked list
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create a linked list: 1 -> 2 -> 3 -> 2 -> 1
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isLinkedListPalindrome(head));  // Output: true
