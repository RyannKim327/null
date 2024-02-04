class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
}
insert(data) {
  const newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
}
delete(data) {
  if (this.head === null) {
    return;
  }

  if (this.head.data === data) {
    this.head = this.head.next;
    return;
  }

  let currNode = this.head;
  let prevNode = null;

  while (currNode !== null) {
    if (currNode.data === data) {
      prevNode.next = currNode.next;
      break;
    }
    prevNode = currNode;
    currNode = currNode.next;
  }
}
print() {
  let currNode = this.head;
  let result = '';

  while (currNode !== null) {
    result += currNode.data + ' ';
    currNode = currNode.next;
  }

  console.log(result);
}
const linkedList = new LinkedList();

linkedList.insert(3);
linkedList.insert(7);
linkedList.insert(12);
linkedList.print(); // Output: 12 7 3

linkedList.delete(7);
linkedList.print(); // Output: 12 3
