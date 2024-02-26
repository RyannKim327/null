class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isPalindrome(head) {
  let values = [];
  let current = head;
  
  // Push node values into an array
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }
  
  // Check if the values form a palindrome
  let start = 0;
  let end = values.length - 1;
  
  while (start < end) {
    if (values[start] !== values[end]) {
      return false;
    }
    start++;
    end--;
  }
  
  return true;
}

// Test the function
let a = new Node('r');
let b = new Node('a');
let c = new Node('c');
let d = new Node('e');
let e = new Node('c');
let f = new Node('a');
let g = new Node('r');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(isPalindrome(a)); // Output: true
