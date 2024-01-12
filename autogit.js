class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getIntersectionNode = (headA, headB) => {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB;
    p2 = p2 ? p2.next : headA;
  }

  return p1; // Return null if there is no intersection
};
// Create the linked lists
const intersect = new ListNode(8);
intersect.next = new ListNode(4);
intersect.next.next = new ListNode(5);

const listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = intersect;

const listB = new ListNode(5);
listB.next = new ListNode(6);
listB.next.next = new ListNode(1);
listB.next.next.next = intersect;

// Find the intersection
const intersection = getIntersectionNode(listA, listB);
console.log(intersection); // Output: ListNode { val: 8, next: ListNode { val: 4, next: [ListNode] } }
