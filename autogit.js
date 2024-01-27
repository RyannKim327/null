class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function isPalindrome(head) {
  // Create an array to hold the elements of the linked list
  const arr = [];

  // Traverse the linked list and store each element in the array
  let current = head;
  while (current !== null) {
    arr.push(current.data);
    current = current.next;
  }

  // Compare the elements in the array to check for a palindrome
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}
// Create a linked list
const list = new LinkedListNode(1);
list.next = new LinkedListNode(2);
list.next.next = new LinkedListNode(3);
list.next.next.next = new LinkedListNode(2);
list.next.next.next.next = new LinkedListNode(1);

// Check if the linked list is a palindrome
console.log(isPalindrome(list));  // Output: true
