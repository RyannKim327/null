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

  // Add a value to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Add a value to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Remove the first occurrence of a value from the list
  remove(value) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        if (!currentNode.next) {
          this.tail = currentNode;
        }
        return;
      }
      currentNode = currentNode.next;
    }
  }

  // Check if a value exists in the list
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // Print the values of the list
  print() {
    let currentNode  = this.head;
    const values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(' -> '));
  }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.remove(2);
console.log(list.contains(3)); // true
console.log(list.contains(2)); // false
list.print(); // 0 -> 1 -> 3
