class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }
  
  // Add a node to the end of the list
  append(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Add a node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Remove the first occurrence of a node with the given data
  remove(data) {
    if (this.isEmpty()) {
      return;
    }

    // If the head node needs to be removed
    if (this.head.data === data) {
      this.head = this.head.next;

      // Check if the list becomes empty after removing the head
      if (this.head === null) {
        this.tail = null;
      }

      return;
    }

    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.data === data) {
        previous.next = current.next;

        // If the last node needs to be removed, update the tail
        if (current === this.tail) {
          this.tail = previous;
        }

        return;
      }

      previous = current;
      current = current.next;
    }
  }

  // Print the linked list
  print() {
    if (this.isEmpty()) {
      console.log("Linked list is empty.");
      return;
    }

    let current = this.head;
    let listStr = "";

    while (current !== null) {
      listStr += current.data + " -> ";
      current = current.next;
    }

    listStr += "null";
    console.log(listStr);
  }
}

// Usage example:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);
linkedList.print(); // Output: 0 -> 1 -> 2 -> 3 -> null
linkedList.remove(2);
linkedList.print(); // Output: 0 -> 1 -> 3 -> null
