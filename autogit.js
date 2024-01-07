function isLinkedListPalindrome(head) {
  // Step 1: Convert the linked list to an array
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.value);
    current = current.next;
  }

  // Step 2: Check if the array is a palindrome
  let left = 0;
  let right = values.length - 1;
  while (left < right) {
    if (values[left] !== values[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}
// Create a sample linked list: 1 -> 2 -> 3 -> 2 -> 1
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);
console.log(isLinkedListPalindrome(head)); // Output: true
