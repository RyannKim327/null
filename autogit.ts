// Define a Node class to represent each element in the list
class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// Now define the LinkedList class itself
class LinkedList<T> {
  private head: Node<T> | null = null;

  // Insert a new value at the end of the list
  append(value: T): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert at the beginning
  prepend(value: T): void {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Find a node by value (returns the node or null)
  find(value: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Remove the first node with the given value
  remove(value: T): void {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Print all the elements (for demonstration)
  print(): void {
    let current = this.head;
    const values: T[] = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.prepend(5);
list.print();  // Output: 5 -> 10 -> 20

console.log(list.find(10)); // Node { value: 10, next: Node { value: 20, next: null } }

list.remove(10);
list.print();  // Output: 5 -> 20
