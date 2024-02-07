function ListNode(val) {
  this.val = val;
  this.next = null;
}
function reverseLinkedList(head) {
  let prev = null;
  let curr = head;
  
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  
  return prev;
}
// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original Linked List:");
let currNode = head;
while (currNode !== null) {
  console.log(currNode.val);
  currNode = currNode.next;
}

head = reverseLinkedList(head);

console.log("Reversed Linked List:");
currNode = head;
while (currNode !== null) {
  console.log(currNode.val);
  currNode = currNode.next;
}
