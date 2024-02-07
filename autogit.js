class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr !== null) {
    next = curr.next; // Save next node
    curr.next = prev; // Reverse pointer

    prev = curr;
    curr = next;
  }

  return prev;
}
let reversedList = reverseLinkedList(list);
let node = reversedList;
while (node !== null) {
  console.log(node.value);
  node = node.next;
}
4
3
2
1
