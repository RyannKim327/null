class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
function isLinkedListPalindrome(head) {
  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let prev = null;
  let curr = slow;
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Step 3: Compare the reversed second half with the first half
  let p1 = head;
  let p2 = prev;
  while (p2 !== null) {
    if (p1.value !== p2.value) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
}
// Sample linked list: 1 -> 2 -> 3 -> 2 -> 1
const node4 = new ListNode(1);
const node3 = new ListNode(2, node4);
const node2 = new ListNode(3, node3);
const node1 = new ListNode(2, node2);
const head = new ListNode(1, node1);

console.log(isLinkedListPalindrome(head)); // Output: true
