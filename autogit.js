function ListNode(value) {
  this.value = value;
  this.next = null;
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Reverse the linked list
const reversedList = reverseLinkedList(node1);

// Traverse the reversed list and print the values
let current = reversedList;
while (current) {
 console.log(current.value);
 current = current.next;
}
5
4
3
2
1
