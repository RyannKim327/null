function getLength(head) {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  return length;
}
function advancePointer(head, steps) {
  let current = head;

  while (steps > 0 && current) {
    current = current.next;
    steps--;
  }

  return current;
}
function getIntersectionNode(headA, headB) {
  // Get the lengths of both lists
  const lengthA = getLength(headA);
  const lengthB = getLength(headB);

  // Calculate the difference in lengths
  let diff = Math.abs(lengthA - lengthB);

  // Advance the pointer of the longer list by the difference
  if (lengthA > lengthB) {
    headA = advancePointer(headA, diff);
  } else {
    headB = advancePointer(headB, diff);
  }

  // Move both pointers until they meet at the intersection
  while (headA && headB) {
    if (headA === headB) {
      return headA;
    }

    headA = headA.next;
    headB = headB.next;
  }

  // No intersection found
  return null;
}
// Define the structure for a linked list node
class ListNode {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}

// Create the first linked list
const listA = new ListNode(3);
listA.next = new ListNode(7);
listA.next.next = new ListNode(8);
listA.next.next.next = new ListNode(10);

// Create the second linked list
const listB = new ListNode(99);
listB.next = new ListNode(1);
listB.next.next = listA.next.next;

// Find the intersection point
const intersection = getIntersectionNode(listA, listB);

if (intersection) {
  console.log(`Intersection found at node with value: ${intersection.val}`);
} else {
  console.log('No intersection found');
}
