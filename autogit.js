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

  insert(value) {
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

  isPalindrome() {
    let values = [];
    let current = this.head;

    // Push values of linked list into an array
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    // Use two pointers approach to compare values
    let start = 0;
    let end = values.length - 1;

    while (start < end) {
      if (values[start] !== values[end]) {
        return false;
      }
      start++;
      end--;
    }

    return true;
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(2);
linkedList.insert(1);

console.log(linkedList.isPalindrome()); // Output: true
