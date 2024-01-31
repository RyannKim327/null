class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA; // or pB, they would either be the same node or null
}
// list1: 1 → 2 → 3 → 6 → 7
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node6 = new ListNode(6);
const node7 = new ListNode(7);
node1.next = node2;
node2.next = node3;
node3.next = node6;
node6.next = node7;

// list2: 4 → 5 → 6 → 7
const node4 = new ListNode(4);
const node5 = new ListNode(5);
node4.next = node5;
node5.next = node6;

const intersectionNode = getIntersectionNode(node1, node4);
console.log(intersectionNode ? intersectionNode.val : "No intersection"); // Output: 6
