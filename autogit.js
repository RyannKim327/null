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

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, set the new node as the head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, append the new node to the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, set the new node as the head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, prepend the new node to the head
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      // If the list is empty, return
      return;
    }

    if (this.head.value === value) {
      // If the head node should be deleted, update the head
      this.head = this.head.next;

      if (!this.head) {
        // If the list becomes empty, update the tail as well
        this.tail = null;
      }

      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        // If the next node's value matches the value to be deleted, update the next reference
        currentNode.next = currentNode.next.next;

        if (currentNode.next === null) {
          // If the next node is the tail, update the tail
          this.tail = currentNode;
        }

        return;
      }

      currentNode = currentNode.next;
    }
  }

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
linkedList.delete(5);

console.log(linkedList.toArray());  // Output: [2, 10]
