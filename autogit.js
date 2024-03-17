class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) {
    return null;
  }

  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }

  return pA;
};
// Create linked list 1: 1 -> 3 -> 5 -> 7 -> 9
let headA = new ListNode(1);
headA.next = new ListNode(3);
headA.next.next = new ListNode(5);
headA.next.next.next = new ListNode(7);
headA.next.next.next.next = new ListNode(9);

// Create linked list 2: 2 -> 4 -> 7 -> 9
let headB = new ListNode(2);
headB.next = new ListNode(4);
headB.next.next = headA.next.next.next; // connecting to the intersecting node 7

let intersectionNode = getIntersectionNode(headA, headB);
console.log(intersectionNode ? intersectionNode.val : null);
