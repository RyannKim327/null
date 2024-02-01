function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

function isPalindrome(head) {
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

// Example usage:
let linkedList = new ListNode(1);
linkedList.next = new ListNode(2);
linkedList.next.next = new ListNode(3);
linkedList.next.next.next = new ListNode(2);
linkedList.next.next.next.next = new ListNode(1);
console.log(isPalindrome(linkedList)); // Output: true
