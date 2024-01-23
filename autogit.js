class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findNthFromEnd(head, n) {
  let first = head;
  let second = head;

  // Move the first pointer to the nth node from the beginning
  for (let i = 0; i < n && first !== null; i++) {
    first = first.next;
  }

  // If first pointer becomes null before reaching n, then the length of the list is less than n
  if (first === null) {
    return null;
  }

  // Move both pointers until first reaches the end of the list
  while (first.next !== null) {
    first = first.next;
    second = second.next;
  }

  // At this point, the second pointer will be pointing to the nth node from the end
  return second;
}
// Create a linked list
let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);
let fifth = new ListNode(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

let n = 2;
let nthNodeFromEnd = findNthFromEnd(head, n);

console.log(`The ${n}th node from end is: ${nthNodeFromEnd.value}`);
