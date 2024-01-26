// Definition for a singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Function to reverse a linked list
function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// Function to check if a linked list is a palindrome
function isLinkedListPalindrome(head) {
  if (head === null || head.next === null) {
    return true; // An empty list or a single node list is considered palindrome
  }

  let fast = head;
  let slow = head;

  // Move `fast` two steps ahead and `slow` one step ahead
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse the second half of the linked list
  slow.next = reverseLinkedList(slow.next);

  let p1 = head;
  let p2 = slow.next;

  // Compare elements of both halves
  while (p2 !== null) {
    if (p1.val !== p2.val) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
}
