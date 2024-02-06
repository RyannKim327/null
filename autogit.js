function getIntersectionNode(headA, headB) {
  let set = new Set();

  // Traverse through the first linked list and add each node's reference to the Set
  let nodeA = headA;
  while (nodeA) {
    set.add(nodeA);
    nodeA = nodeA.next;
  }

  // Traverse through the second linked list, checking if each node's reference exists in the Set
  let nodeB = headB;
  while (nodeB) {
    if (set.has(nodeB)) {
      return nodeB; // Intersection found
    }
    nodeB = nodeB.next;
  }

  return null; // No intersection found
}
