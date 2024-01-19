function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.addNode = function(value) {
  const newNode = new LinkedListNode(value);
  if (this.head === null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
};

LinkedList.prototype.getLength = function() {
  let count = 0;
  let current = this.head;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

// Usage example:
const myList = new LinkedList();
myList.addNode(1);
myList.addNode(2);
myList.addNode(3);
console.log(myList.getLength()); // Output: 3
