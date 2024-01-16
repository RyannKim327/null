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

  // Add a new node at the end of the linked list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Add a new node at the beginning of the linked list
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Delete the first node with the given value from the linked list
  delete(value) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;

      if (!this.head) {
        this.tail = null;
      }

      return;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        if (currentNode.next === this.tail) {
          this.tail = currentNode;
        }

        currentNode.next = currentNode.next.next;
        return;
      }

      currentNode = currentNode.next;
    }
  }

  // Display the linked list in an array format
  toArray() {
    const array = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}
const linkedList = new LinkedList();

linkedList.append(5);
linkedList.append(10);
linkedList.prepend(2);
linkedList.append(15);
linkedList.delete(10);

console.log(linkedList.toArray()); // Output: [2, 5, 15]
