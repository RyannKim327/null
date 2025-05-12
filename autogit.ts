class ListNode<T> {
  data: T;
  next: ListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}
class LinkedList<T> {
  private head: ListNode<T> | null = null;

  // Add a node at the end
  append(data: T): void {
    const newNode = new ListNode(data);
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

  // Print all elements in the list
  print(): void {
    let current = this.head;
    const elements: T[] = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
list.print(); // Output: 10 -> 20 -> 30
