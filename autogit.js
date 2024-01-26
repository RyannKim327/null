function ListNode(val) {
  this.val = val;
  this.next = null;
}

function isLinkedListPalindrome(head) {
  if (!head || !head.next) {
    // Empty list or single node is considered a palindrome
    return true;
  }

  // Step 1: Create slow and fast pointers
  let slow = head;
  let fast = head;
  const stack = [];

  // Step 2: Traverse and push the first half onto the stack
  while (fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 3: Handle odd length by ignoring the middle node
  if (fast) {
    slow = slow.next;
  }

  // Step 4: Traverse the second half and compare with stack
  while (slow) {
    const top = stack.pop();
    if (slow.val !== top) {
      return false;
    }
    slow = slow.next;
  }

  // Step 5: All checks passed, it's a palindrome
  return true;
}
// Example usage
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(2);
list.next.next.next.next = new ListNode(1);

console.log(isLinkedListPalindrome(list));  // Output: true
