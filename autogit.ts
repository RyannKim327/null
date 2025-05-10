class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private tail: ListNode<T> | null = null;
  private length = 0;

  // Add to the end
  append(value: T): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Add to the start
  prepend(value: T): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Remove the first node
  removeFirst(): T | null {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null; // List became empty
    this.length--;
    return value;
  }

  // Convert list to array for easy visualization
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  size(): number {
    return this.length;
  }
}
const list = new LinkedList<number>();
list.append(10);
list.append(20);
list.prepend(5);

console.log(list.toArray()); // [5, 10, 20]
console.log('Removed:', list.removeFirst()); // Removed: 5
console.log(list.toArray()); // [10, 20]
console.log('Size:', list.size()); // Size: 2
