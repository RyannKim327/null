function getNthFromEnd(head, n) {
  let first = head;
  let second = head;

  // Move first pointer n steps forward
  for (let i = 0; i < n; i++) {
    if (first === null) {
      // n is greater than the length of the linked list
      return null;
    }
    first = first.next;
  }

  // Increment both pointers until first reaches the end
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  return second.value;
}
