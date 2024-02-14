class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  // Get lengths of both linked lists
  let lenA = getLength(headA);
  let lenB = getLength(headB);

  // Calculate the difference in lengths
  let diff = Math.abs(lenA - lenB);

  // Traverse the longer linked list to adjust the starting point
  if (lenA > lenB) {
    while (diff > 0) {
      headA = headA.next;
      diff--;
    }
  } else {
    while (diff > 0) {
      headB = headB.next;
      diff--;
    }
  }

  // Traverse both lists together until a matching node is found
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

function getLength(head) {
  let length = 0;
  let currentNode = head;
  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }
  return length;
}
