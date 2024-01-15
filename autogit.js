class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthNodeFromEnd(head, n) {
  let first = head;
  let second = head;

  // Move `first` n steps forward
  for (let i = 0; i < n; i++) {
    if (first === null) {
      // If linked list has less than n nodes
      return null;
    }
    first = first.next;
  }

  // Move both `first` and `second` pointers until `first` reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // Return the node pointed by the `second` pointer
  return second;
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let n = 2;
let nthNodeFromEnd = findNthNodeFromEnd(head, n);
console.log(nthNodeFromEnd.value); // Output: 4
