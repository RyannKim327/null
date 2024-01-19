class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function isPalindrome(head) {
  // Check for empty or single element linked list
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;

  // Find the middle of the linked list
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  slow.next = reverseList(slow.next);
  slow = slow.next;

  // Compare the first and second halves of the linked list
  while (slow !== null) {
    if (head.value !== slow.value) {
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

  while (curr !== null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
}
// Create the linked list: 1 -> 2 -> 3 -> 2 -> 1
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

console.log(isPalindrome(head)); // Output: true
