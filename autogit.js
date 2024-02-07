function findNthNodeFromEnd(head, n) {
  let ahead = head;
  let current = head;

  // Move the ahead pointer n steps forward
  while (n > 0) {
    if (ahead === null) {
      return null; // Linked list length is less than n
    }
    ahead = ahead.next;
    n--;
  }

  // Move both pointers one step at a time
  while (ahead !== null) {
    ahead = ahead.next;
    current = current.next;
  }

  return current;
}
const head = { value: 1, next: null };
const second = { value: 2, next: null };
const third = { value: 3, next: null };

head.next = second;
second.next = third;

console.log(findNthNodeFromEnd(head, 2)); // Output: { value: 2, next: { value: 3, next: null } }
