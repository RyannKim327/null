// First, define a Node class
class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// Now, the LinkedList class
class LinkedList<T> {
  head: Node<T> | null = null;

  // Insert at the end
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

  // Find a node with a specific value
  find(value: T): Node<T> | null {
    let current = this.head;

    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }

    return null;
  }

  // Convert linked list into an array (for easy visualization/debugging)
  toArray(): T[] {
    const elements: T[] = [];
    let current = this.head;

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    return elements;
  }
}

// Usage example:
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toArray()); // [5, 10, 20]
console.log(list.find(10)); // Node { value: 10, next: Node { value: 20, next: null } }
console.log(list.find(30)); // null
