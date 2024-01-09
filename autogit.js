function getListLength(head) {
  let length = 0;
  let current = head;
  
  while (current) {
    length++;
    current = current.next;
  }
  
  return length;
}
function getIntersectionNode(headA, headB) {
  // Find the lengths of the linked lists
  const lengthA = getListLength(headA);
  const lengthB = getListLength(headB);
  
  // Calculate the difference in lengths
  let diff = Math.abs(lengthA - lengthB);
  
  // Move the head of the longer list forward by the difference
  let currentA = headA;
  let currentB = headB;
  if (lengthA > lengthB) {
    for (let i = 0; i < diff; i++) {
      currentA = currentA.next;
    }
  } else {
    for (let i = 0; i < diff; i++) {
      currentB = currentB.next;
    }
  }
  
  // Traverse both lists until an intersection node is found
  while (currentA && currentB) {
    if (currentA === currentB) {
      return currentA; // Intersection node found
    }
    currentA = currentA.next;
    currentB = currentB.next;
  }
  
  return null; // No intersection found
}
// Create the linked lists
const list1 = { val: 1, next: { val: 2, next: null } };
const list2 = { val: 3, next: { val: 4, next: { val: 5, next: null } } };

// Connect the lists at index 1
list1.next.next = list2.next;

// Find the intersection point
const intersectionNode = getIntersectionNode(list1, list2);
console.log(intersectionNode); // Output: { val: 4, next: { val: 5, next: null } }
