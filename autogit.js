// Define the singly linked list node class
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Function to reverse the linked list in-place
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// Function to check if a linked list is a palindrome
function isPalindrome(head) {
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;

  // Find the middle of the linked list
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let reversedHalf = reverseList(slow.next);

  // Compare the first half with the reversed second half
  let current = head;
  while (reversedHalf !== null) {
    if (current.val !== reversedHalf.val) {
      // Restore the linked list by reversing the second half again
      reverseList(reversedHalf);
      return false;
    }
    current = current.next;
    reversedHalf = reversedHalf.next;
  }

  // Restore the linked list by reversing the second half again
  reverseList(slow.next);

  return true;
}

// Example usage
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(2);
list1.next.next.next.next = new ListNode(1);
console.log(isPalindrome(list1)); // Output: true

const list2 = new ListNode(1);
list2.next = new ListNode(2);
list2.next.next = new ListNode(3);
list2.next.next.next = new ListNode(4);
console.log(isPalindrome(list2)); // Output: false
