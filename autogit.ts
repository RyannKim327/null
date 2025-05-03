class Node<T> {
  data: T;
  next: Node<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}
class LinkedList<T> {
  head: Node<T> | null = null;

  // Insert at the end
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

  // Insert at the beginning
  prepend(data: T): void {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Find node by data (returns first match)
  find(data: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Delete node by data (first occurrence)
  delete(data: T): void {
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

  // Convert list to array (useful for debugging or display)
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

list.append(1);
list.append(2);
list.prepend(0);
console.log(list.toArray());  // [0, 1, 2]

list.delete(1);
console.log(list.toArray());  // [0, 2]

const node = list.find(2);
console.log(node?.data);      // 2
