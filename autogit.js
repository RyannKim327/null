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

  addNode(value) {
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
}
function isPalindrome(list) {
  // Step 1: Find the middle of the linked list
  let slow = list.head;
  let fast = list.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let prev = null;
  let current = slow;
  while (current) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  // Step 3: Compare the first half and reversed second half of the linked list
  let firstHalf = list.head;
  let secondHalf = prev;

  while (secondHalf) {
    if (firstHalf.value !== secondHalf.value) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
}
const myList = new LinkedList();
myList.addNode(1);
myList.addNode(2);
myList.addNode(3);
myList.addNode(2);
myList.addNode(1);

console.log(isPalindrome(myList)); // Output: true
