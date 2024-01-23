function reverseLinkedList(head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
}
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
console.log("Original List:");
console.log(linkedList.head);

const reversedList = reverseLinkedList(linkedList.head);
console.log("Reversed List:");
console.log(reversedList);
