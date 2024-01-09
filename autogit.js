class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function isPalindrome(head) {
  if (!head || !head.next) {
    // An empty list or a single node is considered a palindrome.
    return true;
  }

  let slow = head;
  let fast = head;
  
  // Move fast two times faster than slow.
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // Reverse the second half of the list.
  let prev = null;
  let curr = slow;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  // Reset the fast pointer to the head.
  fast = head;
  
  // Compare elements in the first half with the reversed second half.
  while (prev) {
    if (fast.val !== prev.val) {
      return false;
    }
    fast = fast.next;
    prev = prev.next;
  }
  
  return true;
}

// Example usage:
const list1 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(list1)); // Output: true

const list2 = new ListNode(1, new ListNode(2, new ListNode(3)));
console.log(isPalindrome(list2)); // Output: false
