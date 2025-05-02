// Define a node class
class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

// Define the linked list class
class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private size: number = 0;

  // Add a node at the end of the list
  append(value: T): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Add a node at the beginning
  prepend(value: T): void {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Remove the first node with the specified value
  remove(value: T): boolean {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return true;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next && current.next.value === value) {
      current.next = current.next.next;
      this.size--;
      return true;
    }

    return false;
  }

  // Find a node by value
  find(value: T): ListNode<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Convert the list to an array for easier visualization
  toArray(): T[] {
    const elements: T[] = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }

  // Get the size of the list
  getSize(): number {
    return this.size;
  }
}

// Example usage:
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toArray()); // [5, 10, 20]
console.log(list.find(10)); // ListNode { value: 10, next: ListNode { ... } }
list.remove(10);
console.log(list.toArray()); // [5, 20]
console.log(list.getSize()); // 2
