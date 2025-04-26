interface ListNode {
  value: any;
  next: ListNode | null;
}

function getLength(head: ListNode | null): number {
  let count = 0;
  let current = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  return count;
}
