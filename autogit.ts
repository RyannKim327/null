class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head || n < 1) return null; 

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  // Move fast n steps ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) return null; // n is larger than the length
    fast = fast.next;
  }

  // Move both until fast reaches the end
  while (fast !== null) {
    fast = fast.next;
    if (slow !== null) {
      slow = slow.next;
    }
  }

  // slow is now at the nth node from the end
  return slow;
}
