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

  // Insert a new node at the end of the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  // Insert a new node at the beginning of the list
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert a new node after a given node
  insertAfter(data, previousNodeData) {
    const newNode = new Node(data);
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === previousNodeData) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  // Remove a node from the list
  remove(data) {
    if (this.head && this.head.data === data) {
      this.head = this.head.next;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        if (currentNode.next.data === data) {
          currentNode.next = currentNode.next.next;
          break;
        }
        currentNode = currentNode.next;
      }
    }
  }

  // Print the linked list
  print() {
    let currentNode = this.head;
    let listString = '';

    while (currentNode) {
      listString += `${currentNode.data} -> `;
      currentNode = currentNode.next;
    }

    listString += 'null';
    console.log(listString);
  }
}

// Create a new linked list
const linkedList = new LinkedList();

// Append nodes to the list
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

// Prepend node to the list
linkedList.prepend(0);

// Insert node after a given node
linkedList.insertAfter(1.5, 1);

// Print the list: 0 -> 1 -> 1.5 -> 2 -> 3 -> null
linkedList.print();

// Remove a node from the list
linkedList.remove(1.5);

// Print the list: 0 -> 1 -> 2 -> 3 -> null
linkedList.print();
