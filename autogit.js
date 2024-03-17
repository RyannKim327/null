class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function convertListToArray(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.value);
    head = head.next;
  }
  return arr;
}
function isPalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    
    left++;
    right--;
  }
  
  return true;
}
function isLinkedListPalindrome(head) {
  const arr = convertListToArray(head);
  return isPalindrome(arr);
}
// Construct a linked list
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isLinkedListPalindrome(node1)); // Output: true
