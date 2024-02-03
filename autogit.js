class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function getIntersectionNode(headA, headB) {
  let setA = new Set();

  // Traverse the first linked list and store each node's reference in a Set
  let currA = headA;
  while (currA) {
    setA.add(currA);
    currA = currA.next;
  }

  // Traverse the second linked list
  let currB = headB;
  while (currB) {
    // Check if the node's reference is already present in the Set
    if (setA.has(currB)) {
      return currB; // Return the intersection point
    }
    currB = currB.next;
  }

  return null; // Lists do not intersect
}
// Create linked lists
let list1 = new ListNode(3);
list1.next = new ListNode(7);
list1.next.next = new ListNode(10);

let list2 = new ListNode(99);
list2.next = list1.next;

// Find intersection node
let intersectionNode = getIntersectionNode(list1, list2);
console.log(intersectionNode); // Output: ListNode { value: 7, next: ListNode { value: 10, next: null } }
