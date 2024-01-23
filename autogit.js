function getLength(head) {
  let length = 0;
  let current = head;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}
function getIntersectionNode(headA, headB) {
  let lengthA = getLength(headA);
  let lengthB = getLength(headB);

  while (lengthA > lengthB) {
    headA = headA.next;
    lengthA--;
  }

  while (lengthB > lengthA) {
    headB = headB.next;
    lengthB--;
  }

  while (headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
}
// Definition for a linked list node
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Create linked lists
const listA = new ListNode(1);
listA.next = new ListNode(2);
listA.next.next = new ListNode(3);
listA.next.next.next = new ListNode(4);
listA.next.next.next.next = new ListNode(5);

const listB = new ListNode(6);
listB.next = new ListNode(7);
listB.next.next = listA.next.next;

// Find the intersection
const intersection = getIntersectionNode(listA, listB);

// Print the intersection point value
console.log(intersection.val);
