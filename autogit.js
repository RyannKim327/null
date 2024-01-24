// Define the Node class for the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Function to find the nth node from the end
function findNthNodeFromEnd(head, n) {
  // Create two pointers and initialize them to the head
  let fast = head;
  let slow = head;

  // Move the fast pointer n nodes ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) {
      // The linked list has less than n nodes
      return null;
    }
    fast = fast.next;
  }

  // Move both pointers simultaneously until the fast pointer reaches the end
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // The slow pointer is now at the nth node from the end
  return slow;
}

// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const n = 2;
const nthNodeFromEnd = findNthNodeFromEnd(head, n);
console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.value}`);
