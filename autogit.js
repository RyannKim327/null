function isLinkedListPalindrome(head) {
  let values = [];
  let currentNode = head;

  while (currentNode) {
    values.push(currentNode.val);
    currentNode = currentNode.next;
  }

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
