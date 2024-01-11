class ListNode {
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

  // Add a new node at the end of the linked list
  append(value) {
    const newNode = new ListNode(value);
    
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Insert a new node at the beginning of the linked list
  prepend(value) {
    const newNode = new ListNode(value);
    
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Delete the first occurrence of a node with the given value
  delete(value) {
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
    
    let currentNode = this.head;
    
    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        if (this.tail === currentNode.next) {
          this.tail = currentNode;
        }
        currentNode.next = currentNode.next.next;
        return;
      }
      
      currentNode = currentNode.next;
    }
  }

  // Print the values of the linked list
  print() {
    let currentNode = this.head;
    const values = [];
    
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    
    console.log(values.join(' -> '));
  }
}
const linkedList = new LinkedList();
linkedList.append(10); // Adds 10 to the end of the list
linkedList.append(20); // Adds 20 to the end of the list
linkedList.prepend(5);  // Adds 5 to the beginning of the list
linkedList.print();    // Outputs: 5 -> 10 -> 20
linkedList.delete(10); // Deletes the node with value 10
linkedList.print();    // Outputs: 5 -> 20
