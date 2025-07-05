class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList<T> {
  private head: ListNode<T> | null = null;

  // Add a new node at the end
  append(data: T): void {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Insert at the beginning
  prepend(data: T): void {
    const newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Remove a node with specific data
  remove(data: T): boolean {
    if (!this.head) return false;

    if (this.head.data === data) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next && current.next.data === data) {
      current.next = current.next.next;
      return true;
    }
    return false;
  }

  // Traverse and log the list
  print(): void {
    let current = this.head;
    const elements: T[] = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }

  // Additional methods like insertAt, getAt, etc., can be added as needed
}
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.print(); // Output: 1 -> 2 -> 3

list.prepend(0);
list.print(); // Output: 0 -> 1 -> 2 -> 3

list.remove(2);
list.print(); // Output: 0 -> 1 -> 3
