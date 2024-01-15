class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Example Linked List: 1 -> 2 -> 3 -> 2 -> 1

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);
let slow = head;
let fast = head;

while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
}
let prev = null;
let current = slow;
let nextNode = null;

while (current) {
  nextNode = current.next;
  current.next = prev;
  prev = current;
  current = nextNode;
}
let firstHalf = head;
let secondHalf = prev;

while (secondHalf) {
  if (firstHalf.value !== secondHalf.value) {
    console.log("Linked list is not a palindrome.");
    return;
  }
  firstHalf = firstHalf.next;
  secondHalf = secondHalf.next;
}

console.log("Linked list is a palindrome.");
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

let slow = head;
let fast = head;

while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
}

let prev = null;
let current = slow;
let nextNode = null;

while (current) {
  nextNode = current.next;
  current.next = prev;
  prev = current;
  current = nextNode;
}

let firstHalf = head;
let secondHalf = prev;

while (secondHalf) {
  if (firstHalf.value !== secondHalf.value) {
    console.log("Linked list is not a palindrome.");
    return;
  }
  firstHalf = firstHalf.next;
  secondHalf = secondHalf.next;
}

console.log("Linked list is a palindrome.");
