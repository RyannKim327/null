class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function findNthNodeFromEnd(head: ListNode, n: number): ListNode | null {
  let main = head;
  let ref = head;

  // Move ref pointer n steps ahead of main pointer
  for (let i = 0; i < n; i++) {
    if (ref === null) {
      return null; // not enough nodes in the list
    }
    ref = ref.next;
  }

  // Move both pointers one step at a time until ref reaches the end
  while (ref !== null) {
    main = main.next;
    ref = ref.next;
  }

  return main;
}
