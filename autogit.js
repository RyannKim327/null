class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isPalindrome(head) {
  if (!head || !head.next) {
    return true;
  }

  let values = [];
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    values.push(slow.value);
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) { // odd number of elements, move slow one step forward
    slow = slow.next;
  }

  while (slow) {
    if (slow.value !== values.pop()) {
      return false;
    }
    slow = slow.next;
  }

  return true;
}

// Test if a linked list is a palindrome
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let b2 = new Node('b');
let a2 = new Node('a');

a.next = b;
b.next = c;
c.next = b2;
b2.next = a2;

console.log(isPalindrome(a)); // Output: true
