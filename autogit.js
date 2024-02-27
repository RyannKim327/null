class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let visitedNodes = new Set();
  let currentNodeA = headA;

  // Traverse the first linked list and store nodes in a Set
  while (currentNodeA) {
    visitedNodes.add(currentNodeA);
    currentNodeA = currentNodeA.next;
  }

  // Traverse the second linked list and check for intersection
  let currentNodeB = headB;
  while (currentNodeB) {
    if (visitedNodes.has(currentNodeB)) {
      return currentNodeB;
    }
    currentNodeB = currentNodeB.next;
  }

  return null; // No intersection found
}

// Example usage:
// Construct two linked lists
let listA = new Node(4);
listA.next = new Node(1);
listA.next.next = new Node(8);
listA.next.next.next = new Node(4);
listA.next.next.next.next = new Node(5);

let listB = new Node(5);
listB.next = new Node(0);
listB.next.next = new Node(1);
listB.next.next.next = listA.next.next;

const intersectionNode = getIntersectionNode(listA, listB);
if (intersectionNode) {
  console.log("Intersection node value:", intersectionNode.value);
} else {
  console.log("No intersection node found");
}
