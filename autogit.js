class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

function findNthNodeFromEnd(head, n) {
  let pointer1 = head;
  let pointer2 = head;

  // Move pointer2 'n' nodes ahead
  for (let i = 0; i < n; i++) {
    if (pointer2 === null) {
      return null; // List length is less than 'n'
    }
    pointer2 = pointer2.next;
  }

  // Move both pointers until pointer2 reaches the end of the list
  while (pointer2 !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
}

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const nthNode = findNthNodeFromEnd(head, 2); // Find the 2nd node from the end
console.log(nthNode.val); // Output: 4
