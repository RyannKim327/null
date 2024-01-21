class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let current = head;
  let previous = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5

const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

console.log('Original List:');
printList(head);

const reversedHead = reverseLinkedList(head);

console.log('Reversed List:');
printList(reversedHead);

function printList(node) {
  let current = node;
  let list = '';
  while (current !== null) {
    list += current.value + ' -> ';
    current = current.next;
  }
  list += 'null';
  console.log(list);
}
Original List:
1 -> 2 -> 3 -> 4 -> 5 -> null
Reversed List:
5 -> 4 -> 3 -> 2 -> 1 -> null
