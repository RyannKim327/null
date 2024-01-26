class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isPalindromeLinkedList(head) {
  if (!head || !head.next) {
    // If the linked list is empty or has only one node, it is a palindrome
    return true;
  }

  // Find the middle element of the linked list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  let curr = slow;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Compare the first half and reversed second half
  let firstHalf = head;
  let secondHalf = prev;
  while (firstHalf && secondHalf) {
    if (firstHalf.data !== secondHalf.data) {
      // The linked list is not a palindrome
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  // Restore the original order of the second half
  curr = prev;
  prev = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  slow.next = prev;

  // The linked list is a palindrome
  return true;
}
const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(2);
list.next.next.next.next = new Node(1);

console.log(isPalindromeLinkedList(list)); // Output: true
