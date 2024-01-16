function isPalindrome(head) {
  // Step 1: Traverse linked list and store values in an array
  let currentNode = head;
  const values = [];
  while (currentNode !== null) {
    values.push(currentNode.val);
    currentNode = currentNode.next;
  }

  // Step 2: Use two pointers to check if the array is a palindrome
  let start = 0;
  let end = values.length - 1;
  while (start < end) {
    if (values[start] !== values[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}
