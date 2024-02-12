class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function createLinkedList(values) {
  let head = null;
  let tail = null;

  for (let i = 0; i < values.length; i++) {
    let newNode = new Node(values[i]);

    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  return head;
}
function isLinkedListPalindrome(head) {
  // Step 1: Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let prev = null;
  let curr = slow;

  while (curr) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  // Step 3: Compare the first half of the linked list with the reversed second half
  let firstHalf = head;
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
let myList = createLinkedList([1, 2, 3, 2, 1]);

console.log(isLinkedListPalindrome(myList)); // Output: true
