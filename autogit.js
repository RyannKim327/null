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

  addNode(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}
function getLength(linkedList) {
  let current = linkedList.head;
  let length = 0;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}

// Usage
const linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);

const length = getLength(linkedList);
console.log(length); // Output: 4
