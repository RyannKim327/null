function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

// Method to add a node to the end of the linked list
LinkedList.prototype.addNode = function(value) {
  var newNode = new LinkedListNode(value);

  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

// Method to find the length of the linked list
LinkedList.prototype.getLength = function() {
  var current = this.head;
  var count = 0;

  while (current !== null) {
    count++;
    current = current.next;
  }

  return count;
};

// Example usage
var list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);

console.log(list.getLength()); // Output: 3
