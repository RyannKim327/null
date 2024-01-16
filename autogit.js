class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Create the first linked list: list1
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
// Create the second linked list: list2
const list2 = new ListNode(3);
list2.next = new ListNode(4);
let ptr1 = list1;
let ptr2 = list2;
while (ptr1 !== ptr2) {
  ptr1 = ptr1 === null ? list2 : ptr1.next;
  ptr2 = ptr2 === null ? list1 : ptr2.next;
}
const intersectionNode = ptr1;
return intersectionNode;
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findIntersection(list1, list2) {
  let ptr1 = list1;
  let ptr2 = list2;

  while (ptr1 !== ptr2) {
    ptr1 = ptr1 === null ? list2 : ptr1.next;
    ptr2 = ptr2 === null ? list1 : ptr2.next;
  }

  const intersectionNode = ptr1;
  return intersectionNode;
}

// Example usage:
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);

const list2 = new ListNode(3);
list2.next = new ListNode(4);

const intersection = findIntersection(list1, list2);
console.log(intersection); // Output: ListNode { value: 3, next: ListNode { value: 4, next: null } }
