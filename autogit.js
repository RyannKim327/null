function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let set = new Set();

  // Traverse through the first linked list and store nodes in the set
  let currA = headA;
  while (currA) {
    set.add(currA);
    currA = currA.next;
  }

  // Traverse through the second linked list and check for intersection
  let currB = headB;
  while (currB) {
    if (set.has(currB)) {
      return currB; // Intersection node found
    }
    currB = currB.next;
  }

  return null; // No intersection found
}
