class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a node to the end of the list
  append(data) {
    const newNode = new LinkedListNode(data);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Add a node to the beginning of the list
  prepend(data) {
    const newNode = new LinkedListNode(data);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Insert a node at a specific position in the list
  insert(data, position) {
    const newNode = new LinkedListNode(data);
    
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      
      if (!this.tail) {
        this.tail = newNode;
      }
      
      return;
    }
    
    let current = this.head;
    let count = 0;
    
    while (current) {
      if (count === position - 1) {
        newNode.next = current.next;
        current.next = newNode;

        if (current === this.tail) {
          this.tail = newNode;
        }
        
        break;
      }
      
      current = current.next;
      count++;
    }
  }

  // Remove a node at a specific position from the list
  removeAt(position) {
    if (!this.head) {
      return;
    }
    
    if (position === 0) {
      this.head = this.head.next;
      
      if (this.head === null) {
        this.tail = null;
      }
      
      return;
    }
    
    let current = this.head;
    let count = 0;
    
    while (current) {
      if (count === position - 1) {
        current.next = current.next.next;

        if (current.next === null) {
          this.tail = current;
        }

        break;
      }
      
      current = current.next;
      count++;
    }
  }

  // Search for the first occurrence of the specified data in the list
  find(data) {
    let current = this.head;
    
    while (current) {
      if (current.data === data) {
        return current;
      }
      
      current = current.next;
    }
    
    return null;
  }

  // Convert the linked list to an array
  toArray() {
    const array = [];
    let current = this.head;
    
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    
    return array;
  }
}
const ll = new LinkedList();
ll.append(10);
ll.append(20);
ll.prepend(5);
ll.insert(15, 2);
ll.removeAt(1);
console.log(ll.toArray()); // Output: [5, 15, 20]
