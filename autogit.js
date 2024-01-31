class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function findNthNodeFromEnd(head, n) {
   let slow = head;
   let fast = head;

   // Move the fast pointer to the nth node from the beginning
   for (let i = 0; i < n; i++) {
      if (fast === null) {
         return null; // Out of bounds
      }
      fast = fast.next;
   }

   // Move both pointers until fast reaches the end
   while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
   }

   // At this point, slow pointer is pointing at the nth node from the end
   return slow;
}
// Create the linked list
const head = new ListNode(1);
const second = new ListNode(2);
const third = new ListNode(3);
const fourth = new ListNode(4);
const fifth = new ListNode(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

// Test the function
const n = 2;
const nthNodeFromEnd = findNthNodeFromEnd(head, n);
console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.value}`);
