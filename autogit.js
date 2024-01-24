function getIntersectionNode(headA, headB) {
  // Get the lengths of both linked lists
  const lengthA = getLength(headA);
  const lengthB = getLength(headB);

  let pointerA = headA;
  let pointerB = headB;

  // Calculate the length difference between the two lists
  const lengthDiff = Math.abs(lengthA - lengthB);

  // Move the pointer of the longer list ahead by the length difference
  if (lengthA > lengthB) {
    for (let i = 0; i < lengthDiff; i++) {
      pointerA = pointerA.next;
    }
  } else {
    for (let i = 0; i < lengthDiff; i++) {
      pointerB = pointerB.next;
    }
  }

  // Traverse both linked lists simultaneously until the pointers meet or reach the end
  while (pointerA !== null && pointerB !== null) {
    if (pointerA === pointerB) {
      return pointerA; // Intersection found
    }
    pointerA = pointerA.next;
    pointerB = pointerB.next;
  }

  return null; // No intersection
}

// Example usage:

// Linked List A: 1 -> 2 -> 3 -> 4
const nodeA1 = { val: 1, next: null };
const nodeA2 = { val: 2, next: null };
const nodeA3 = { val: 3, next: null };
const nodeA4 = { val: 4, next: null };
nodeA1.next = nodeA2;
nodeA2.next = nodeA3;
nodeA3.next = nodeA4;

// Linked List B: 6 -> 7 -> 8 -> 2 -> 3 -> 4
const nodeB1 = { val: 6, next: null };
const nodeB2 = { val: 7, next: null };
const nodeB3 = { val: 8, next: null };
nodeB1.next = nodeB2;
nodeB2.next = nodeB3;
nodeB3.next = nodeA2; // Intersection point

const intersectionNode = getIntersectionNode(nodeA1, nodeB1);

console.log(intersectionNode); // Output: { val: 2, next: { val: 3, next: { val: 4, next: null } } }
