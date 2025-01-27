class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList<T>(head: Node<T>): Node<T> {
  let prev: Node<T> | null = null;
  let current: Node<T> = head;
  let next: Node<T> | null = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original List:");
let current = head;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}

const reversedHead = reverseLinkedList(head);

console.log("Reversed List:");
current = reversedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
Original List:
1
2
3
4
5
Reversed List:
5
4
3
2
1
