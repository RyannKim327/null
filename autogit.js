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

  /**
   * Adds a new node to the end of the linked list.
   * @param {any} value - The value to be added.
   */
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

  /**
   * Adds a new node to the beginning of the linked list.
   * @param {any} value - The value to be added.
   */
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

  /**
   * Inserts a new node at a specific position in the linked list.
   * @param {any} value - The value to be inserted.
   * @param {number} index - The position at which to insert the value.
   */
  insert(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    
    const newNode = new Node(value);
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;
    
    while (currentNode && currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
    
    newNode.next = currentNode;
    prevNode.next = newNode;
    
    if (newNode.next === null) {
      this.tail = newNode; // Update the tail if the new node is the last node
    }
  }

  /**
   * Removes the node at the specified position in the linked list.
   * @param {number} index - The position of the node to be removed.
   */
  remove(index) {
    if (index === 0) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return;
    }
  
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;
    
    while (currentNode && currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }
    
    if (currentNode) {
      prevNode.next = currentNode.next;
  
      if (currentNode === this.tail) {
        this.tail = prevNode; // Update the tail if the removed node is the last node
      }
    }
  }

  /**
   * Searches for the first occurrence of the given value in the linked list.
   * @param {any} value - The value to search for.
   * @returns {number} - The index of the first occurrence of the value in the linked list, or -1 if not found.
   */
  indexOf(value) {
    let currentNode = this.head;
    let currentIndex = 0;
  
    while (currentNode) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      
      currentNode = currentNode.next;
      currentIndex++;
    }
    
    return -1;
  }

  /**
   * Returns an array representation of the linked list.
   * @returns {Array} - An array representation of the linked list.
   */
  toArray() {
    const result = [];
    let currentNode = this.head;
    
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    
    return result;
  }
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.insert(100, 2);
list.remove(3);

console.log(list.toArray()); // [0, 1, 100, 3]
console.log(list.indexOf(100)); // 2
