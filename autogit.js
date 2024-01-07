class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function getLength(head) {
  let length = 0;
  let current = head;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}

function getIntersectionNode(headA, headB) {
  const lengthA = getLength(headA);
  const lengthB = getLength(headB);

  let longer = lengthA > lengthB ? headA : headB;
  let shorter = lengthA > lengthB ? headB : headA;

  let diff = Math.abs(lengthA - lengthB);
  while (diff > 0) {
    longer = longer.next;
    diff--;
  }

  while (longer !== null && shorter !== null) {
    if (longer === shorter) {
      return longer;
    }

    longer = longer.next;
    shorter = shorter.next;
  }

  return null; // No intersection found
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node6 = new ListNode(6);

// Create the first linked list: listA: 1 -> 2 -> 3 -> 6
node1.next = node2;
node2.next = node3;
node3.next = node6;

// Create the second linked list: listB: 4 -> 5 -> 6
node4.next = node5;
node5.next = node6;

// Find the intersection of both linked lists
const intersectionNode = getIntersectionNode(node1, node4);
console.log(intersectionNode); // Output: ListNode { val: 6, next: null }
