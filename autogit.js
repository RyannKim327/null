class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthFromEnd(head, n) {
  let ptr1 = head;
  let ptr2 = head;

  // Move ptr2 n positions ahead
  for (let i = 0; i < n; i++) {
    if (ptr2 === null) {
      return null; // Invalid input: list length is less than n
    }
    ptr2 = ptr2.next;
  }

  // Move both pointers until ptr2 reaches the end
  while (ptr2 !== null) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr1 !== null ? ptr1.value : null;
}

// Example usage:
const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);

console.log(findNthFromEnd(list, 2)); // Output: 4
