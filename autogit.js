class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
let head = new Node(1);
let second = new Node(2);
let third = new Node(3);

head.next = second;
second.next = third;
let prev = null;
let current = head;
let next = null;

while (current !== null) {
  next = current.next;
  current.next = prev;
  prev = current;
  current = next;
}

head = prev;
let currentNode = head;
while (currentNode !== null) {
  console.log(currentNode.value);
  currentNode = currentNode.next;
}
