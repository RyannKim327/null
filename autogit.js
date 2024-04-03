class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getIntersectionNode = (headA, headB) => {
  const set = new Set();

  let current = headA;
  while (current) {
    set.add(current);
    current = current.next;
  }

  current = headB;
  while (current) {
    if (set.has(current)) {
      return current;
    }
    current = current.next;
  }
  
  return null;
};

// Example usage
// Construct two intersecting linked lists
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

const node4 = new ListNode(4);
node4.next = node2;

// Find intersection node
const intersection = getIntersectionNode(node1, node4);

console.log("Intersection node value:", intersection.val);
