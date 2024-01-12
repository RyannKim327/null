function getLinkedListLength(head) {
  let count = 0;
  let current = head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
}
function findIntersection(headA, headB) {
  // Find the lengths of both linked lists
  const lengthA = getLinkedListLength(headA);
  const lengthB = getLinkedListLength(headB);

  let diff = Math.abs(lengthA - lengthB);

  // Determine the longer and shorter linked lists
  let longer = lengthA > lengthB ? headA : headB;
  let shorter = lengthA > lengthB ? headB : headA;

  // Adjust the longer linked list pointer by the difference in lengths
  while (diff > 0) {
    longer = longer.next;
    diff--;
  }

  // Traverse both linked lists until they intersect
  while (longer !== shorter) {
    longer = longer.next;
    shorter = shorter.next;
  }

  // Return the intersection node
  return longer;
}
// Definition for a linked list node
class ListNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

// Create linked list A: 1 -> 2 -> 3 -> 4
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Create linked list B: 6 -> 7 --> 3 --> 4
const node6 = new ListNode(6);
const node7 = new ListNode(7);
node6.next = node7;
node7.next = node3; // Connect to the intersection node

// Find the intersection point
const intersectionNode = findIntersection(node1, node6);

// Check the intersection node value
if (intersectionNode) {
  console.log("Intersection at node with value:", intersectionNode.val);
} else {
  console.log("No intersection found.");
}
