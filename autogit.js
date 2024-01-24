function LinkedList() {
  this.head = null;
}

// Node class
function Node(data) {
  this.data = data;
  this.next = null;
}

// Method to find length of the linked list
LinkedList.prototype.getLength = function() {
  let length = 0;
  let current = this.head;

  while (current) {
    length++;
    current = current.next;
  }

  return length;
}

// Example usage:
const list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);

const length = list.getLength();
console.log(length); // Output: 3
