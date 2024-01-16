class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}
// Create the linked list: 1 -> 2 -> 3 -> 4 -> null
let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);

head.next = second;
second.next = third;
third.next = fourth;

// Reverse the linked list: 4 -> 3 -> 2 -> 1 -> null
let reversedHead = reverseLinkedList(head);

// Print the reversed linked list
let current = reversedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
4
3
2
1
