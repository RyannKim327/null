function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getIntersectionNode(headA, headB) {
  const visitedNodes = new Set();

  let nodeA = headA;
  while (nodeA) {
    visitedNodes.add(nodeA);
    nodeA = nodeA.next;
  }

  let nodeB = headB;
  while (nodeB) {
    if (visitedNodes.has(nodeB)) {
      return nodeB;
    }
    nodeB = nodeB.next;
  }

  return null; // No intersection found
}
