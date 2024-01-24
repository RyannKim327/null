function findIntersection(headA, headB) {
  let set = new Set();
  
  // Traverse the first linked list and store each node's reference in a set
  let nodeA = headA;
  while (nodeA) {
    set.add(nodeA);
    nodeA = nodeA.next;
  }
  
  // Traverse the second linked list and check for intersection
  let nodeB = headB;
  while (nodeB) {
    if (set.has(nodeB)) {
      return nodeB;  // Intersection point found
    }
    nodeB = nodeB.next;
  }
  
  // If no intersection point found
  return null;
}
const intersectionNode = findIntersection(headA, headB);
console.log(intersectionNode);
