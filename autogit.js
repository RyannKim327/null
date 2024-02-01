class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  getLength() {
    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log(linkedList.getLength()); // Output: 3
