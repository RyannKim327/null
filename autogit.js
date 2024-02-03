class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}
LinkedList.prototype.insert = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
};
LinkedList.prototype.isPalindrome = function () {
  let slowPtr = this.head;
  let fastPtr = this.head;
  let prevSlowPtr = null;
  let midNode = null;
  let result = true;

  if (this.head !== null && this.head.next !== null) {
    while (fastPtr !== null && fastPtr.next !== null) {
      fastPtr = fastPtr.next.next;

      prevSlowPtr = slowPtr;
      slowPtr = slowPtr.next;
    }

    if (fastPtr !== null) {
      midNode = slowPtr;
      slowPtr = slowPtr.next;
    }

    let secondHalfPtr = slowPtr;
    prevSlowPtr.next = null;
    let reversePtr = this.reverse(secondHalfPtr);

    result = this.compareLists(this.head, reversePtr);

    let reverseSecondHalfPtr = this.reverse(reversePtr);
    if (midNode !== null) {
      prevSlowPtr.next = midNode;
      midNode.next = reverseSecondHalfPtr;
    } else {
      prevSlowPtr.next = reverseSecondHalfPtr;
    }
  }
  
  return result;
};
LinkedList.prototype.reverse = function (headNode) {
  let prevNode = null;
  let currentNode = headNode;
  let nextNode = null;

  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
};

LinkedList.prototype.compareLists = function (head1, head2) {
  let temp1 = head1;
  let temp2 = head2;

  while (temp1 && temp2) {
    if (temp1.data === temp2.data) {
      temp1 = temp1.next;
      temp2 = temp2.next;
    } else {
      return false;
    }
  }

  if (temp1 === null && temp2 === null) {
    return true;
  }

  return false;
};
const linkedList = new LinkedList();
linkedList.insert('a');
linkedList.insert('b');
linkedList.insert('c');
linkedList.insert('b');
linkedList.insert('a');

console.log(linkedList.isPalindrome()); // Output: true

const linkedList2 = new LinkedList();
linkedList2.insert(1);
linkedList2.insert(2);
linkedList2.insert(3);
linkedList2.insert(4);
linkedList2.insert(5);

console.log(linkedList2.isPalindrome()); // Output: false
