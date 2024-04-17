// Node class representing a single element in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked list class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Function to check if the linked list is a palindrome
  isPalindrome() {
    // Convert the linked list into an array
    let currentNode = this.head;
    let arr = [];
    while (currentNode !== null) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }

    // Check if the array is a palindrome
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false;
      }
    }

    return true;
  }
}

// Example linked list
const linkedList = new LinkedList();
linkedList.head = new Node(1);
linkedList.head.next = new Node(2);
linkedList.head.next.next = new Node(2);
linkedList.head.next.next.next = new Node(1);

// Check if the linked list is a palindrome
console.log(linkedList.isPalindrome()); // Output: true
