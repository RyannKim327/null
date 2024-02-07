class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthFromEnd(head, n) {
  let pointer1 = head;
  let pointer2 = head;

  // Move pointer2 n positions ahead
  for (let i = 0; i < n; i++) {
    if (pointer2 === null) {
      return null; // if the list has less than n nodes
    }
    pointer2 = pointer2.next;
  }

  // Move both pointers until pointer2 reaches the end
  while (pointer2 !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
}
// Create linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2; // find the 2nd node from the end
let result = findNthFromEnd(head, n);
console.log(`The ${n}th node from the end is: ${result.value}`);
