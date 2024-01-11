class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function findNthFromEnd(head, n) {
  // Create two pointers initially pointing to the head
  let p1 = head;
  let p2 = head;

  // Move p2 n nodes ahead
  for (let i = 0; i < n; i++) {
    if (p2 === null) {
      return null; // Linked list has fewer nodes than n
    }
    p2 = p2.next;
  }

  // Move both pointers until p2 reaches the end of the list
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // p1 will now point to the nth node from the end
  return p1;
}
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const n = 2; // Find the 2nd node from the end

const result = findNthFromEnd(head, n);
console.log(result.value); // Output: 4
