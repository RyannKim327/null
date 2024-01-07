class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isPalindrome(head) {
  if (!head || !head.next) {
    return true; // Empty or single-node linked list is a palindrome
  }

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next; // Move the fast pointer two steps at a time
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  if (fast) {
    slow = slow.next; // The linked list's length is odd, skip the middle element
  }

  while (slow) {
    if (slow.value !== prev.value) {
      return false; // Values at corresponding nodes are not equal, not a palindrome
    }
    slow = slow.next;
    prev = prev.next;
  }

  return true;
}

// Example usage:
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

console.log(isPalindrome(head)); // Output: true
