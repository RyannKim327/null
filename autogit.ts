class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function nthNodeFromEnd<T>(head: Node<T>, n: number): Node<T> | null {
  let main = head;
  let ref = head;

  // Move ref pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!ref) {
      return null; // Not enough nodes in the list
    }
    ref = ref.next;
  }

  // Move both pointers one step at a time
  while (ref) {
    main = main.next;
    ref = ref.next;
  }

  return main;
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const nthNode = nthNodeFromEnd(head, 2);
console.log(nthNode.value); // Output: 3 (the 2nd node from the end of the list)
