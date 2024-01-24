class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function getIntersectionNode(headA, headB) {
  // Calculate the lengths of both linked lists
  let lengthA = getLinkedListLength(headA);
  let lengthB = getLinkedListLength(headB);

  let currentA = headA;
  let currentB = headB;

  // Align the start points of both linked lists
  if (lengthA > lengthB) {
    let diff = lengthA - lengthB;
    while (diff-- > 0) {
      currentA = currentA.next;
    }
  } else {
    let diff = lengthB - lengthA;
    while (diff-- > 0) {
      currentB = currentB.next;
    }
  }

  // Iterate through the aligned linked lists to find the intersection
  while (currentA && currentB) {
    if (currentA === currentB) {
      return currentA;
    }
    currentA = currentA.next;
    currentB = currentB.next;
  }

  // No intersection found
  return null;
}

// Helper function to calculate the length of a linked list
function getLinkedListLength(head) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
}
// Create the first linked list: 1 -> 9 -> 3 -> 7 -> 5
let node5 = new ListNode(5);
let node7 = new ListNode(7, node5);
let node3 = new ListNode(3, node7);
let node9 = new ListNode(9, node3);
let headA = new ListNode(1, node9);

// Create the second linked list: 2 -> 4 -> 6 -> 7 -> 5
let node6 = new ListNode(6, node7);
let node4 = new ListNode(4, node6);
let headB = new ListNode(2, node4);

console.log(getIntersectionNode(headA, headB)); // Output: ListNode { val: 7, next: ListNode { val: 5, next: null } }
