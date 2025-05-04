class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  append(value: number) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      process.stdout.write(current.value + " -> ");
      current = current.next;
    }
    console.log("null");
  }
}
function reverseLinkedList(head: Node | null): Node | null {
  let prev: Node | null = null;
  let current: Node | null = head;

  while (current !== null) {
    const next: Node | null = current.next; // Store next node
    current.next = prev;                     // Reverse the current node's pointer
    prev = current;                          // Move prev and current one step forward
    current = next;
  }
  return prev; // New head of the reversed linked list
}
// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original linked list:");
list.printList();

list.head = reverseLinkedList(list.head);

console.log("Reversed linked list:");
list.printList();
class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  append(value: number) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      process.stdout.write(current.value + " -> ");
      current = current.next;
    }
    console.log("null");
  }
}

function reverseLinkedList(head: Node | null): Node | null {
  let prev: Node | null = null;
  let current: Node | null = head;

  while (current !== null) {
    const next: Node | null = current.next; // Store next node
    current.next = prev;                     // Reverse the current node's pointer
    prev = current;                          // Move prev and current one step forward
    current = next;
  }
  return prev; // New head of the reversed linked list
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original linked list:");
list.printList();

list.head = reverseLinkedList(list.head);

console.log("Reversed linked list:");
list.printList();
