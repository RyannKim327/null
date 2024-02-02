class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  let set = new Set();

  // Traverse the first linked list and store nodes in a set
  let nodeA = headA;
  while (nodeA) {
    set.add(nodeA);
    nodeA = nodeA.next;
  }

  // Traverse the second linked list and find the intersection node
  let nodeB = headB;
  while (nodeB) {
    if (set.has(nodeB)) {
      return nodeB; // Intersection point found
    }
    nodeB = nodeB.next;
  }

  return null; // No intersection point found
}
// Example linked lists
const listA = new ListNode(1);
listA.next = new ListNode(2);
listA.next.next = new ListNode(3);

const listB = new ListNode(6);
listB.next = listA.next;

const intersection = getIntersectionNode(listA, listB);
console.log('Intersection node:', intersection);
