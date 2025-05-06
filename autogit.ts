class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

function findMiddle<T>(head: ListNode<T> | null): ListNode<T> | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;         // Move slow by 1
    fast = fast.next.next;     // Move fast by 2
  }

  // When fast reaches the end, slow is at the middle
  return slow;
}
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const middleNode = findMiddle(head);
console.log(middleNode?.value);  // Outputs 3
