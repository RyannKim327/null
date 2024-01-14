class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isPalindrome(head) {
  if (!head || !head.next) {
    return true; // Empty list or single element is a palindrome
  }

  // Helper function to reverse a linked list
  function reverseList(node) {
    let prev = null;
    while (node) {
      let next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return prev;
  }

  // Helper function to find the middle of the linked list
  function findMiddle(node) {
    let slow = node;
    let fast = node;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  let slow = head;
  let fast = head;
  let prevSlow = null;
  let mid = null;
  let isPalindrome = true;

  // Find the middle of the linked list and reverse the second half
  while (fast && fast.next) {
    fast = fast.next.next;
    prevSlow = slow;
    slow = slow.next;
  }

  // Check if the total number of elements is odd or even
  if (fast) {
    // Total number of elements is odd
    mid = slow;
    slow = slow.next;
  }

  prevSlow.next = null; // Cut off the first half
  let secondHalf = reverseList(slow); // Reverse the second half

  // Compare the first half with the reversed second half
  let p1 = head;
  let p2 = secondHalf;
  while (p1 && p2) {
    if (p1.value !== p2.value) {
      isPalindrome = false;
      break;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  // Restore the original linked list by reversing the second half again
  secondHalf = reverseList(secondHalf);
  if (mid) {
    prevSlow.next = mid;
    mid.next = secondHalf;
  } else {
    prevSlow.next = secondHalf;
  }

  return isPalindrome;
}

// Example usage:

// Create the linked list: 1 -> 2 -> 3 -> 2 -> 1
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

console.log(isPalindrome(head)); // Output: true
