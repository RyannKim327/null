function getListLength(node) {
  let length = 0;
  let current = node;
  while (current !== null) {
    length++;
    current = current.next;
  }
  return length;
}
function getIntersectionNode(headA, headB) {
  // Get lengths of both linked lists
  const lengthA = getListLength(headA);
  const lengthB = getListLength(headB);

  // Find the difference in lengths
  let diff = Math.abs(lengthA - lengthB);

  // Move the pointer of the longer list to align with the shorter one
  let ptrA = (lengthA > lengthB) ? headA : headB;
  let ptrB = (lengthA > lengthB) ? headB : headA;

  while (diff > 0) {
    ptrA = ptrA.next;
    diff--;
  }

  // Traverse both lists together until intersection point is found
  while (ptrA !== ptrB) {
    ptrA = ptrA.next;
    ptrB = ptrB.next;
  }

  return ptrA; // Returns the intersection node or null if no intersection exists
}
