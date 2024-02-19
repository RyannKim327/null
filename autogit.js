class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;

  let visitedNodes = new Set();

  let currentA = headA;
  while (currentA) {
    visitedNodes.add(currentA);
    currentA = currentA.next;
  }

  let currentB = headB;
  while (currentB) {
    if (visitedNodes.has(currentB)) {
      return currentB;
    }
    currentB = currentB.next;
  }

  return null;
};

// Example usage
// Constructing two linked lists
let linkedListA = new ListNode(1);
linkedListA.next = new ListNode(2);
linkedListA.next.next = new ListNode(3);

let linkedListB = new ListNode(4);
linkedListB.next = linkedListA.next;

let intersectionNode = getIntersectionNode(linkedListA, linkedListB);
if (intersectionNode) {
  console.log("Intersection node value:", intersectionNode.value);
} else {
  console.log("No intersection point found.");
}
