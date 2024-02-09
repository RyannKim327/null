class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function isPalindrome(head) {
  let slow = head;
  let fast = head;

  // Use a fast and slow pointer approach to find the middle of the list
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let reversed = null;
  while (slow !== null) {
    const next = slow.next;
    slow.next = reversed;
    reversed = slow;
    slow = next;
  }

  // Compare the first and second halves of the linked list
  while (reversed !== null) {
    if (head.val !== reversed.val) {
      return false;
    }
    head = head.next;
    reversed = reversed.next;
  }

  return true;
}
// Example usage
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(2);
list.next.next.next.next = new ListNode(1);

console.log(isPalindrome(list)); // Output: true
