function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let lengthA = getLength(headA);
  let lengthB = getLength(headB);

  let diff = Math.abs(lengthA - lengthB);

  let currA = headA;
  let currB = headB;

  if (lengthA > lengthB) {
    for (let i = 0; i < diff; i++) {
      currA = currA.next;
    }
  } else if (lengthA < lengthB) {
    for (let i = 0; i < diff; i++) {
      currB = currB.next;
    }
  }

  while (currA !== null && currB !== null) {
    if (currA === currB) {
      return currA;
    }
    currA = currA.next;
    currB = currB.next;
  }

  return null;
}

function getLength(node) {
  let length = 0;
  let curr = node;

  while (curr !== null) {
    length++;
    curr = curr.next;
  }

  return length;
}
