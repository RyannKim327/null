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

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  printList() {
    let current = this.head;
    let list = '';

    while (current) {
      list += current.value + ' -> ';
      current = current.next;
    }

    list += 'null';
    console.log(list);
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

console.log('Original list:');
list.printList();

list.reverse();

console.log('Reversed list:');
list.printList();
