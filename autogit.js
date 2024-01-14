class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function isLinkedListPalindrome(head) {
  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the list
  let prev = null;
  let current = slow;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // Step 3: Compare the first and second half of the list
  let firstHalf = head;
  let secondHalf = prev;

  while (secondHalf) {
    if (firstHalf.value !== secondHalf.value) {
      return false;
    }

    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
}
// Create the linked list: 1 -> 2 -> 3 -> 2 -> 1
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

console.log(isLinkedListPalindrome(head)); // Output: true
