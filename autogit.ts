class Node<T> {
  data: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Method to add a new node to the end of the list
  append(data: T): void {
    const newNode = new Node(data);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  // Method to remove a node by value
  remove(data: T): boolean {
    if (!this.head) {
      return false; // List is empty
    }

    // Handle the head separately
    if (this.head.data === data) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null; // List is now empty
      }
      return true;
    }

    let currentNode: Node<T> | null = this.head;
    while (currentNode && currentNode.next) {
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;
        if (!currentNode.next) {
          this.tail = currentNode; // Update tail if we removed the last node
        }
        return true;
      }
      currentNode = currentNode.next;
    }
    return false; // Value not found
  }

  // Method to print the contents of the list
  print(): void {
    let currentNode = this.head;
    const values: T[] = [];
    while (currentNode) {
      values.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(values.join(' -> '));
  }

  // Method to find a node by value
  find(data: T): Node<T> | null {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null; // Value not found
  }

  // Additional methods (like pre-pend, insert at specific index, etc.) can be added here
}
const list = new LinkedList<number>();

list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30

list.remove(20);
list.print(); // Output: 10 -> 30

const foundNode = list.find(30);
console.log(foundNode ? foundNode.data : 'Not found'); // Output: 30
