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

  isPalindrome() {
    // Create two pointers, slow and fast, both pointing to the head node
    let slow = this.head;
    let fast = this.head;

    // Create a stack to store the values of the first half of the linked list
    const stack = [];

    // Traverse the linked list with the fast pointer
    while (fast && fast.next) {
      // Push the value of the slow pointer into the stack
      stack.push(slow.value);
      
      // Move the slow pointer one step at a time
      slow = slow.next;
      
      // Move the fast pointer two steps at a time
      fast = fast.next.next;
    }
    
    // If the length of the linked list is odd, move the slow pointer one step ahead
    if (fast) {
      slow = slow.next;
    }

    // Compare the remaining values in the second half of the linked list with the values popped from the stack
    while (slow) {
      if (slow.value !== stack.pop()) {
        return false; // Not a palindrome
      }
      slow = slow.next;
    }

    return true; // Palindrome
  }
}
// Create a linked list
const list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(2);
list.head.next.next.next.next = new Node(1);

// Check if the linked list is a palindrome
console.log(list.isPalindrome()); // Output: true
