class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function isPalindrome(head) {
  // Edge case: if head is null or only one node
  if (!head || !head.next) {
    return true;
  }

  let slow = head;
  let fast = head;
  let prev = null;

  // Move the fast pointer twice as fast as the slow pointer
  while (fast && fast.next) {
    fast = fast.next.next;

    // Reverse the first half of the list using the three-pointer technique
    const temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // If the linked list has an odd number of nodes, skip the middle node
  if (fast !== null) {
    slow = slow.next;
  }

  // Compare the reversed first half with the second half of the list
  while (slow) {
    if (slow.val !== prev.val) {
      return false;
    }
    slow = slow.next;
    prev = prev.next;
  }

  return true;
}

// Example usage:
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
list2.next.next.next.next = new ListNode(5);

console.log(isPalindrome(list2)); // Output: false
