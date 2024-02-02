class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isLinkedListPalindrome(head) {
  if (!head || !head.next) {
    return true;
  }
  
  let slow = head;
  let fast = head;
  
  // Finding the middle element of the linked list
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // Reversing the second half of the linked list
  let secondHalf = slow.next;
  let prev = null;
  
  while (secondHalf) {
    const next = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = next;
  }
  
  slow.next = prev;
  
  // Comparing values from the first and second halves of the linked list
  let firstHalf = head;
  secondHalf = slow.next;
  
  while (secondHalf) {
    if (firstHalf.data !== secondHalf.data) {
      return false;
    }
    
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  
  return true;
}

// Creating a sample linked list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

console.log(isLinkedListPalindrome(head)); // Output: true

head.next.next.next.data = 4;

console.log(isLinkedListPalindrome(head)); // Output: false
