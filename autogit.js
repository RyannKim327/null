function ListNode(val) {
  this.val = val;
  this.next = null;
}

function isPalindrome(head) {
  let values = [];
  
  // Store values of linked list nodes
  while (head !== null) {
    values.push(head.val);
    head = head.next;
  }

  let left = 0;
  let right = values.length - 1;

  // Check for palindrome
  while (left < right) {
    if (values[left] !== values[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example usage:

// Create a sample linked list: 1 -> 2 -> 3 -> 2 -> 1
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

// Check if the linked list is a palindrome
console.log(isPalindrome(head)); // Output: true
