class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function isLinkedListPalindrome(head) {
  // Implementation goes here
}
function isLinkedListPalindrome(head) {
  const values = [];
  let current = head;

  while (current) {
    values.push(current.value);
    current = current.next;
  }

  // Implementation continues...
}
function isLinkedListPalindrome(head) {
  const values = [];
  let current = head;

  while (current) {
    values.push(current.value);
    current = current.next;
  }

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
const node1 = new ListNode('a');
const node2 = new ListNode('b');
const node3 = new ListNode('c');
const node4 = new ListNode('b');
const node5 = new ListNode('a');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(isLinkedListPalindrome(node1)); // Output: true
