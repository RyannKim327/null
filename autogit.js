class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  // Traverse both linked lists to find their lengths and the last nodes
  let lengthA = getLength(headA);
  let lengthB = getLength(headB);
  let currA = headA;
  let currB = headB;

  // If the last nodes are not the same, there is no intersection
  if (getLastNode(currA) !== getLastNode(currB)) {
    return null;
  }

  // Determine the difference in lengths
  let diff = Math.abs(lengthA - lengthB);

  // Traverse the longer linked list
  if (lengthA > lengthB) {
    while (diff > 0) {
      currA = currA.next;
      diff--;
    }
  } else if (lengthA < lengthB) {
    while (diff > 0) {
      currB = currB.next;
      diff--;
    }
  }

  // Traverse both linked lists together, comparing the nodes
  while (currA !== currB) {
    currA = currA.next;
    currB = currB.next;
  }

  // Return the intersection node
  return currA;
}

// Helper function to get the length of a linked list
function getLength(head) {
  let length = 0;
  let curr = head;

  while (curr) {
    length++;
    curr = curr.next;
  }

  return length;
}

// Helper function to get the last node of a linked list
function getLastNode(head) {
  let curr = head;

  while (curr && curr.next) {
    curr = curr.next;
  }

  return curr;
}
