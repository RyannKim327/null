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

  delete(value) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        if (currentNode.next === null) {
          this.tail = currentNode;
        }
        return;
      }
      currentNode = currentNode.next;
    }
  }

  print() {
    if (!this.head) {
      console.log("Linked List is empty");
      return;
    }

    let currentNode = this.head;
    let result = '';
    while (currentNode) {
      result += currentNode.value + ' -> ';
      currentNode = currentNode.next;
    }
    result += 'null';
    console.log(result);
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.append(30);
linkedList.print(); // Output: 5 -> 10 -> 20 -> 30 -> null
linkedList.delete(20);
linkedList.print(); // Output: 5 -> 10 -> 30 -> null
