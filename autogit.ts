class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (!headA || !headB) return null;

  let p1: ListNode | null = headA;
  let p2: ListNode | null = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB;
    p2 = p2 ? p2.next : headA;
  }

  return p1;  // Can be the intersection node or null if no intersection
}
// Creating an example intersection:
// List A: 1 -> 3 -> 5 \
//                         7 -> 9
// List B:      2 -> 6  /

const intersect = new ListNode(7);
intersect.next = new ListNode(9);

const listA = new ListNode(1);
listA.next = new ListNode(3);
listA.next.next = new ListNode(5);
listA.next.next.next = intersect;

const listB = new ListNode(2);
listB.next = new ListNode(6);
listB.next.next = intersect;

const node = getIntersectionNode(listA, listB);
console.log(node?.val);  // Output: 7
