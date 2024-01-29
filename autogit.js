function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.addNode = function(value) {
  var newNode = new LinkedListNode(value);

  if (this.head === null) {
    this.head = newNode;
  } else {
    var currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
};

LinkedList.prototype.getLength = function() {
  var currentNode = this.head;
  var length = 0;

  while (currentNode !== null) {
    length++;
    currentNode = currentNode.next;
  }

  return length;
};

// Example usage
var list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
console.log(list.getLength()); // Output: 4
