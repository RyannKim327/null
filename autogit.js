function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;

  // Method to append a node to the linked list
  this.append = function (value) {
    var newNode = new LinkedListNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      var current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  };

  // Method to find the length of the linked list
  this.getLength = function () {
    var current = this.head;
    var count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  };
}

// Example usage
var list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);

console.log(list.getLength()); // Output: 4
