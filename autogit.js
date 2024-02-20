class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  let lenA = getLength(headA);
  let lenB = getLength(headB);

  let currentA = headA;
  let currentB = headB;

  // Traverse the longer linked list by the difference in lengths
  for (let i = 0; i < Math.abs(lenA - lenB); i++) {
    if (lenA > lenB) {
      currentA = currentA.next;
    } else {
      currentB = currentB.next;
    }
  }

  // Traverse both lists simultaneously and check for intersection
  while (currentA && currentB) {
    if (currentA === currentB) {
      return currentA;
    }
    currentA = currentA.next;
    currentB = currentB.next;
  }

  return null; // No intersection found
}

function getLength(head) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
}

// Example usage
// Construct two linked lists
let listA = new ListNode(1);
listA.next = new ListNode(2);
listA.next.next = new ListNode(3);
listA.next.next.next = new ListNode(4);

let listB = new ListNode(10);
listB.next = listA.next.next;

let intersectionNode = getIntersectionNode(listA, listB);
console.log(intersectionNode); // Output: ListNode { value: 3, next: ListNode { value: 4, next: null } }
