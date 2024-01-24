class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
add(value) {
  const newNode = new Node(value);
  
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
find(value) {
  let currentNode = this.head;
  
  while (currentNode) {
    if (currentNode.value === value) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  
  return null;
}
remove(value) {
  if (!this.head) {
    return;
  }
  
  if (this.head.value === value) {
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return;
  }
  
  let currentNode = this.head;
  
  while (currentNode.next) {
    if (currentNode.next.value === value) {
      currentNode.next = currentNode.next.next;
      if (currentNode.next === null) {
        this.tail = currentNode;
      }
      return;
    }
    currentNode = currentNode.next;
  }
}
const list = new LinkedList();
list.add(5);
list.add(10);
list.add(15);

console.log(list.find(10));  // Node { value: 10, next: Node { value: 15, next: null } }

list.remove(10);
console.log(list.find(10));  // null
