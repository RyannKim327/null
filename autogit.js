function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getIntersectionNode(headA, headB) {
  // Store nodes of the first list
  const nodes = new Set();
  let nodeA = headA;
  while (nodeA !== null) {
    nodes.add(nodeA);
    nodeA = nodeA.next;
  }

  // Traverse second list and check for intersection
  let nodeB = headB;
  while (nodeB !== null) {
    if (nodes.has(nodeB)) {
      return nodeB; // Intersection found
    }
    nodeB = nodeB.next;
  }

  return null; // No intersection found
}
// Linked list 1: 1->2->3->4->5
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

// Linked list 2: 7->5->4->3->4->5
const head2 = new ListNode(7);
head2.next = new ListNode(5);
head2.next.next = new ListNode(4);
head2.next.next.next = head1.next.next; // Intersecting node
head2.next.next.next.next = head1.next.next.next;
head2.next.next.next.next.next = head1.next.next.next.next;

const intersection = getIntersectionNode(head1, head2);
console.log(intersection); // Output: ListNode { val: 3, next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }
