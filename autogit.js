class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  let set = new Set();
  let intersectionHead = null;
  let intersectionTail = null;

  // Iterate through the first linked list and store each node in a Set
  let currNode = headA;
  while (currNode) {
    set.add(currNode);
    currNode = currNode.next;
  }

  // Iterate through the second linked list and check if each node is present in the Set
  currNode = headB;
  while (currNode) {
    if (set.has(currNode)) {
      if (!intersectionHead) {
        intersectionHead = new ListNode(currNode.val);
        intersectionTail = intersectionHead;
      } else {
        intersectionTail.next = new ListNode(currNode.val);
        intersectionTail = intersectionTail.next;
      }
    }
    currNode = currNode.next;
  }

  return intersectionHead;
}
