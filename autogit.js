function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.addNode = function(value) {
  var node = new LinkedListNode(value);
  
  if (!this.head) {
    this.head = node;
  } else {
    var current = this.head;
    
    while (current.next) {
      current = current.next;
    }
    
    current.next = node;
  }
}

LinkedList.prototype.getLength = function() {
  var current = this.head;
  var count = 0;
  
  while (current) {
    count++;
    current = current.next;
  }
  
  return count;
}

// Example usage
var list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);

console.log(list.getLength()); // Output: 3
