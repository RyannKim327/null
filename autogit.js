// Definition of a linked list node
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Function to find the length of a linked list
const getLinkedListLength = (head) => {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
};

// Function to find the intersection of two linked lists
const getIntersectionNode = (headA, headB) => {
  const lengthA = getLinkedListLength(headA);
  const lengthB = getLinkedListLength(headB);

  let p1 = headA;
  let p2 = headB;

  // Move the longer list's pointer ahead by the difference in lengths
  if (lengthA > lengthB) {
    for (let i = 0; i < lengthA - lengthB; i++) {
      p1 = p1.next;
    }
  } else if (lengthB > lengthA) {
    for (let i = 0; i < lengthB - lengthA; i++) {
      p2 = p2.next;
    }
  }

  // Traverse both lists until they meet or reach the end
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1; // Return the intersecting node or null if there is no intersection
};
