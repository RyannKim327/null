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
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, append the new node after the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty, prepend the new node before the head
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      // If the list is empty, do nothing
      return;
    }

    if (this.head.value === value) {
      // If the head node matches the value, remove the head node
      this.head = this.head.next;

      if (!this.head) {
        // If the list becomes empty, update the tail
        this.tail = null;
      }

      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      // Find the node with the matching value
      current = current.next;
    }

    if (current.next && current.next.value === value) {
      // If the next node matches the value, remove the node
      current.next = current.next.next;

      if (!current.next) {
        // If the last node is removed, update the tail
        this.tail = current;
      }
    }
  }

  search(value) {
    let current = this.head;
    while (current) {
      // Traverse the list and return the node if the value matches
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null; // Value not found
  }

  toArray() {
    const result = [];
    let current = this.head;

    while (current) {
      // Convert the linked list to an array
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);
linkedList.delete(2);

console.log(linkedList.toArray()); // Output: [0, 1, 3]
