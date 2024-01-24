function getIntersectionNode(headA, headB) {
  // Create a Set to store nodes from the first linked list
  const set = new Set();

  // Traverse the first linked list and store each node's reference in the Set
  let node = headA;
  while (node) {
    set.add(node);
    node = node.next;
  }

  // Traverse the second linked list and check if each node exists in the Set
  node = headB;
  while (node) {
    if (set.has(node)) {
      return node; // Return the intersection node
    }
    node = node.next;
  }

  return null; // No intersection found, return null
}
