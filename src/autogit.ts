// Node class represents each element in the linked list
class Node<T> {
  public data: T; // The value stored in the node
  public next: Node<T> | null; // Reference to the next node

  constructor(data: T) {
    this.data = data;
    this.next = null; // By default, the next node is null
  }
}

// LinkedList class manages the nodes
class LinkedList<T> {
  private head: Node<T> | null; // Reference to the first node
  private size: number; // Number of nodes in the list

  constructor() {
    this.head = null; // Initially, the list is empty
    this.size = 0; // Initial size is zero
  }

  // Method to add a new node at the end of the list
  public append(data: T): void {
    const newNode = new Node(data);

    if (!this.head) {
      // If the list is empty, set the new node as the head
      this.head = newNode;
    } else {
      // Traverse to the last node and append the new node
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++; // Increment the size of the list
  }

  // Method to insert a new node at a specific position
  public insertAt(data: T, index: number): void {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(data);

    if (index === 0) {
      // Insert at the beginning
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // Insert at a specific position
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (current) {
          current = current.next!;
        }
      }
      if (current) {
        newNode.next = current.next;
        current.next = newNode;
      }
    }

    this.size++; // Increment the size of the list
  }

  // Method to remove a node at a specific position
  public removeAt(index: number): T | null {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }

    let removedData: T | null = null;

    if (index === 0) {
      // Remove the first node
      removedData = this.head?.data || null;
      this.head = this.head?.next || null;
    } else {
      // Remove at a specific position
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        if (current) {
          current = current.next!;
        }
      }
      if (current && current.next) {
        removedData = current.next.data;
        current.next = current.next.next;
      }
    }

    this.size--; // Decrement the size of the list
    return removedData;
  }

  // Method to get the size of the list
  public getSize(): number {
    return this.size;
  }

  // Method to print the list as an array
  public toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }

    return result;
  }
}
const list = new LinkedList<number>();

list.append(10); // Add 10 to the list
list.append(20); // Add 20 to the list
list.insertAt(15, 1); // Insert 15 at index 1
list.append(30); // Add 30 to the list

console.log(list.toArray()); // Output: [10, 15, 20, 30]
console.log(list.getSize()); // Output: 4

list.removeAt(2); // Remove the node at index 2
console.log(list.toArray()); // Output: [10, 15, 30]
