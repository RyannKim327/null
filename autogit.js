class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function findNthNodeFromEnd(head, n) {
  let slow = head;
  let fast = head;
  
  // Move the fast pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null; // n is greater than the length of the linked list
    }
    fast = fast.next;
  }
  
  // Move both pointers until the fast pointer reaches the end
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  
  return slow;
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2; // Find the 2nd node from the end

let result = findNthNodeFromEnd(head, n);
console.log(result.data); // Output: 4
