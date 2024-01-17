class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthNodeFromEnd(head, n) {
  let slow = head;
  let fast = head;

  // Move the fast pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      return null; // Indicates n is greater than the length of the list
    }
    fast = fast.next;
  }

  // Move both pointers until the fast pointer reaches the end
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // 'slow' will be pointing to the nth node from the end
  return slow;
}
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
const n = 2;
const result = findNthNodeFromEnd(head, n);
console.log(result.value); // Output: 4
