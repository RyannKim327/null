class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  let nodeA = headA;
  let nodeB = headB;
  let lenA = 0;
  let lenB = 0;

  // Get the length of linked lists A and B
  while (nodeA) {
    lenA += 1;
    nodeA = nodeA.next;
  }

  while (nodeB) {
    lenB += 1;
    nodeB = nodeB.next;
  }

  // Reset current node references
  nodeA = headA;
  nodeB = headB;

  // Move the longer linked list pointer forward
  while (lenA > lenB) {
    nodeA = nodeA.next;
    lenA -= 1;
  }

  while (lenB > lenA) {
    nodeB = nodeB.next;
    lenB -= 1;
  }

  // Traverse both lists and find the intersection point
  while (nodeA && nodeB) {
    if (nodeA === nodeB) {
      return nodeA;
    }
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }

  // No intersection found
  return null;
}
