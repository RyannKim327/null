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

  // Add a new node to the end of the linked list
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Check if the linked list is a palindrome
  isPalindrome() {
    // Special case: empty list or single node list
    if (!this.head || !this.head.next) {
      return true;
    }

    // Reverse the second half of the linked list
    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast && fast.next) {
      fast = fast.next.next; // Move fast pointer twice as fast as slow pointer
      let next = slow.next;
      slow.next = prev; // Reverse the link
      prev = slow;
      slow = next;
    }

    let secondHalf = fast ? slow.next : slow; // Keep track of the second half's start

    // Compare the first half with the reversed second half
    let firstHalf = prev;
    while (firstHalf && secondHalf) {
      if (firstHalf.value !== secondHalf.value) {
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }

    return true;
  }
}
// Create a linked list
const linkedList = new LinkedList();
linkedList.append('a');
linkedList.append('b');
linkedList.append('c');
linkedList.append('b');
linkedList.append('a');

// Check if the linked list is a palindrome
console.log(linkedList.isPalindrome()); // Output: true

// Create another linked list
const linkedList2 = new LinkedList();
linkedList2.append('a');
linkedList2.append('b');
linkedList2.append('c');
linkedList2.append('d');
linkedList2.append('e');

// Check if the linked list is a palindrome
console.log(linkedList2.isPalindrome()); // Output: false
