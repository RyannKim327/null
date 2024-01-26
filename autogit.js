class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function findNthFromEnd(head, n) {
  // Two pointers to track the nth node from the end and the end of the list
  let p1 = head;
  let p2 = head;

  // Move p2 n positions ahead
  for (let i = 0; i < n; i++) {
    if (p2 === null) {
      // If the list has fewer than n nodes, return null
      return null;
    }
    p2 = p2.next;
  }

  // Move both pointers until p2 reaches the end of the list
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  // p1 will be pointing to the nth node from the end
  return p1;
}
// Create a sample linked list 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Call the function to find the 2nd node from the end
const n = 2;
const nthNodeFromEnd = findNthFromEnd(head, n);

console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.val}`);
