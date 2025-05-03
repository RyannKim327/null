class Node<T> {
  data: T;
  next: Node<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}
class LinkedList<T> {
  head: Node<T> | null = null;

  // Add a new node at the end
  append(data: T): void {
    const newNode = new Node(data);
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

  // Add a new node at the start
  prepend(data: T): void {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Remove the first node with the specified data
  remove(data: T): void {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next && current.next.data === data) {
      current.next = current.next.next;
    }
  }

  // Traverse and collect data in an array
  toArray(): T[] {
    const elements: T[] = [];
    let current = this.head;

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    return elements;
  }
}
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toArray()); // Output: [5, 10, 20]

list.remove(10);
console.log(list.toArray()); // Output: [5, 20]
