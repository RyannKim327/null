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
reverse() {
  let prev = null;
  let current = this.head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  this.head = prev;
}
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);

console.log("Before reverse:");
linkedList.print(); // Output: 1 -> 2 -> 3 -> 4

linkedList.reverse();

console.log("After reverse:");
linkedList.print(); // Output: 4 -> 3 -> 2 -> 1
print() {
  let current = this.head;
  let values = [];
  while (current !== null) {
    values.push(current.data);
    current = current.next;
  }
  console.log(values.join(' -> '));
}
