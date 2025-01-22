class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList<T>(head: Node<T>): Node<T> | null {
  let previous: Node<T> | null = null;
  let current: Node<T> | null = head;
  let next: Node<T> | null = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
const reversedHead = reverseLinkedList(head);
