class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

function isPalindrome(head) {
  const values = [];

  // Traverse the linked list and store values in an array
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  let start = 0;
  let end = values.length - 1;

  // Compare values at both pointers
  while (start < end) {
    if (values[start] !== values[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}
