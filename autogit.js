class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
function isLinkedListPalindrome(head) {
  if (!head || !head.next) {
    // Empty or single-node list is always a palindrome
    return true;
  }

  // Find the midpoint of the list using the slow and fast pointers
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse the second half of the list
  let secondHalf = reverseLinkedList(slow);

  // Compare the first and second half of the list
  let p1 = head;
  let p2 = secondHalf;
  while (p2) {
    if (p1.value !== p2.value) {
      // Nodes don't match, not a palindrome
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  // If all nodes matched, it's a palindrome
  return true;
}
// Create a sample linked list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

// Check if the linked list is a palindrome
console.log(isLinkedListPalindrome(head)); // Output: true
