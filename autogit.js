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

  let p1 = headA;
  let p2 = headB;
  let lenA = 0;
  let lenB = 0;

  while (p1) {
    lenA++;
    p1 = p1.next;
  }

  while (p2) {
    lenB++;
    p2 = p2.next;
  }

  p1 = headA;
  p2 = headB;

  if (lenA > lenB) {
    let diff = lenA - lenB;
    while (diff > 0) {
      p1 = p1.next;
      diff--;
    }
  } else if (lenB > lenA) {
    let diff = lenB - lenA;
    while (diff > 0) {
      p2 = p2.next;
      diff--;
    }
  }

  while (p1 && p2) {
    if (p1 === p2) {
      return p1;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return null;
}
// Create the intersecting nodes
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);

// Create the first linked list
const listA = new ListNode(1);
listA.next = new ListNode(2);
listA.next.next = new ListNode(3);
listA.next.next.next = node4;
listA.next.next.next.next = node5;

// Create the second linked list
const listB = new ListNode(7);
listB.next = new ListNode(8);
listB.next.next = node4;
listB.next.next.next = node5;
listB.next.next.next.next = node6;

// Find the intersection
const intersection = getIntersectionNode(listA, listB);

if (intersection) {
  console.log("Intersection node value: " + intersection.val);
} else {
  console.log("No intersection found.");
}
