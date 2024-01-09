class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);

head.next = second;
second.next = third;
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
head = reverseLinkedList(head);
