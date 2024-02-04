class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a new element at the end of the linked list
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Add a new element at the beginning of the linked list
  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Remove the first occurrence of a value from the linked list
  remove(value) {
    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;

      if (this.head === null) {
        this.tail = null;
      }
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;

        if (current.next === null) {
          this.tail = current;
        }
        return;
      }
      current = current.next;
    }
  }

  // Check if a value is present in the linked list
  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Convert the linked list to an array
  toArray() {
    const result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.remove(10);
console.log(linkedList.toArray()); // Output: [5, 20]
console.log(linkedList.contains(20)); // Output: true
console.log(linkedList.contains(10)); // Output: false
