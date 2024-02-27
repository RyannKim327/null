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

  let lenA = getLength(headA);
  let lenB = getLength(headB);

  let currA = headA;
  let currB = headB;

  // Align the pointers to start at the same position
  while (lenA > lenB) {
    currA = currA.next;
    lenA--;
  }

  while (lenB > lenA) {
    currB = currB.next;
    lenB--;
  }

  // Traverse both lists in parallel
  while (currA !== currB) {
    currA = currA.next;
    currB = currB.next;

    if (currA === null && currB === null) {
      return null; // No intersection found
    }

    if (currA === null) {
      currA = headB; // Reset currA to headB
    }

    if (currB === null) {
      currB = headA; // Reset currB to headA
    }
  }

  return currA; // Return the intersection node
};

const getLength = (head) => {
  let len = 0;
  let curr = head;

  while (curr) {
    len++;
    curr = curr.next;
  }

  return len;
};

// Example usage
const list1 = new ListNode(4);
list1.next = new ListNode(1);
list1.next.next = new ListNode(8);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = list1.next.next; // Intersection point

const intersection = getIntersectionNode(list1, list2);

if (intersection) {
  console.log("Intersection found at node with value: " + intersection.val);
} else {
  console.log("No intersection found");
}
