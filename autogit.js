function Node(value) {
  this.value = value;
  this.next = null;
}

function findMiddleElement(head) {
  let slow = head;
  let fast = head;

  // Move the fast pointer by 2 steps and the slow pointer by 1 step
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // The value of the slow pointer will be the middle element
  return slow.value;
}

// Example usage:

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Find the middle element
const middleElement = findMiddleElement(head);
console.log(middleElement); // Output: 3
