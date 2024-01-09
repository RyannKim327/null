// Linked List Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Function to add new element at the end of the list
  add(data) {
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
  }

  // Function to check if the linked list is a palindrome
  isPalindrome() {
    if (!this.head) {
      // If the linked list is empty, it is considered a palindrome
      return true;
    }

    let slow = this.head;
    let fast = this.head;

    // Use slow and fast pointers to find the middle of the linked list
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let prev = null;
    let current = slow;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    // Compare the reversed second half with the first half of the linked list
    let firstHalf = this.head;
    let secondHalf = prev;
    while (secondHalf) {
      if (firstHalf.data !== secondHalf.data) {
        return false; // The linked list is not a palindrome
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }

    return true; // The linked list is a palindrome
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

console.log(linkedList.isPalindrome()); // Output: true
