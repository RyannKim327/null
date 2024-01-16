class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function getIntersectionNode(headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB;
    p2 = p2 ? p2.next : headA;
  }

  return p1; // or p2, because they now hold the intersection node (if any)
}
// Create example linked lists
const node4 = new ListNode(4);
const node1 = new ListNode(1, node4);
const headA = new ListNode(5, new ListNode(6, new ListNode(7, node1)));

const headB = new ListNode(2, new ListNode(3, node1));

const intersectionNode = getIntersectionNode(headA, headB);
console.log(intersectionNode); // Output: ListNode { value: 1, next: ListNode { value: 4, next: null } }
