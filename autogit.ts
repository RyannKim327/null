class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

function findNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head || n <= 0) return null;

  let first: ListNode | null = head;
  let second: ListNode | null = head;

  // Move first n steps ahead
  for (let i = 0; i < n; i++) {
    if (!first) return null; // n is larger than the length of the list
    first = first.next;
  }

  // Move first to the end, maintaining the gap
  while (first) {
    first = first.next;
    second = second!.next;
  }

  return second;
}
// Creating a simple linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1,
  new ListNode(2,
    new ListNode(3,
      new ListNode(4,
        new ListNode(5)
      )
    )
  )
);

const nthNode = findNthFromEnd(head, 2);
console.log(nthNode?.value); // Output: 4
