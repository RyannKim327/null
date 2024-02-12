class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isPalindrome(head) {
  // Step 1: Split the linked list into two halves
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // Step 2: Reverse the second half of the linked list
  let prev = null;
  while (slow) {
    const temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }
  
  // Step 3: Compare the first and second halves of the linked list
  let first = head;
  let second = prev;
  while (second) {
    if (first.data !== second.data) {
      return false;
    }
    first = first.next;
    second = second.next;
  }
  
  return true;
}

// Example usage:
const head = new Node('a');
head.next = new Node('b');
head.next.next = new Node('b');
head.next.next.next = new Node('a');

console.log(isPalindrome(head)); // Output: true
