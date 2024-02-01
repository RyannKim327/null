class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev;
}
function isLinkedListPalindrome(head) {
  let slow = head;
  let fast = head;

  // Find the middle node
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast !== null) {
    // The linked list has odd number of elements, skip the middle node
    slow = slow.next;
  }

  // Reverse the second half of the linked list
  let reversedSecondHalf = reverseLinkedList(slow);

  // Compare the first half with the reversed second half
  let current = head;
  let secondHalf = reversedSecondHalf;
  
  while (current !== null && secondHalf !== null) {
    if (current.val !== secondHalf.val) {
      return false;
    }
    current = current.next;
    secondHalf = secondHalf.next;
  }

  return true;
}
// Create a linked list: 1 -> 2 -> 3 -> 2 -> 1
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isLinkedListPalindrome(head)); // Output: true
