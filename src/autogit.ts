class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null; // Initially, the node does not point to any other node.
  }
}
class LinkedList<T> {
  private head: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null; // Initially, the list is empty.
    this.size = 0;    // Track the number of nodes in the list.
  }

  // Add a node to the end of the list
  append(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, set the new node as the head.
      this.head = newNode;
    } else {
      // Traverse to the last node and append the new node.
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  // Add a node to the beginning of the list
  prepend(value: T): void {
    const newNode = new Node(value);
    newNode.next = this.head; // Point the new node to the current head.
    this.head = newNode;      // Update the head to the new node.
    this.size++;
  }

  // Remove the first occurrence of a node with the given value
  remove(value: T): boolean {
    if (!this.head) return false; // List is empty, nothing to remove.

    // If the head node contains the value, update the head.
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    // Traverse the list to find the node to remove.
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next; // Bypass the node to be removed.
        this.size--;
        return true;
      }
      current = current.next;
    }

    return false; // Value not found in the list.
  }

  // Find the first node with the given value
  find(value: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current; // Return the node if the value matches.
      }
      current = current.next;
    }
    return null; // Value not found in the list.
  }

  // Get the size of the list
  getSize(): number {
    return this.size;
  }

  // Check if the list is empty
  isEmpty(): boolean {
    return this.size === 0;
  }

  // Convert the list to an array for easy visualization
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}
const list = new LinkedList<number>();

list.append(10);
list.append(20);
list.prepend(5);

console.log(list.toArray()); // Output: [5, 10, 20]

list.remove(10);
console.log(list.toArray()); // Output: [5, 20]

console.log(list.find(20));  // Output: Node { value: 20, next: null }
console.log(list.getSize()); // Output: 2
console.log(list.isEmpty()); // Output: false
