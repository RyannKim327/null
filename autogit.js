class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
}
class LinkedList {
  // previous code...

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // remaining code...
}
class LinkedList {
  // previous code...

  reverse() {
    let previous = null;
    let current = this.head;
    let following = null;

    while (current !== null) {
      following = current.next;
      current.next = previous;
      previous = current;
      current = following;
    }

    this.head = previous;
  }

  // remaining code...
}
const list = new LinkedList();
list.add('A');
list.add('B');
list.add('C');
list.add('D');

console.log('Original list:');
console.log(list);

list.reverse();

console.log('Reversed list:');
console.log(list);
Original list:
LinkedList { head: Node { value: 'A', next: Node { value: 'B', next: [Node] } } }
Reversed list:
LinkedList { head: Node { value: 'D', next: Node { value: 'C', next: [Node] } } }
