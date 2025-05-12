class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList<T> {
  head: ListNode<T> | null = null;

  // Add a new node at the end
  add(value: T): void {
    const newNode = new ListNode(value);
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

  // Remove first node with the given value
  remove(value: T): boolean {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next && current.next.value === value) {
      current.next = current.next.next;
      return true;
    }
    return false; // value not found
  }

  // Print all nodes for debugging
  print(): void {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(' -> '));
  }
}
const list = new LinkedList<number>();
list.add(10);
list.add(20);
list.add(30);
list.print();  // Output: 10 -> 20 -> 30

list.remove(20);
list.print();  // Output: 10 -> 30
