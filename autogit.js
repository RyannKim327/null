function findNthNodeFromEnd(head, n) {
  let p1 = head;
  let p2 = head;

  // Move p2 n positions forward
  for (let i = 0; i < n; i++) {
    if (p2 === null) {
      return null; // Linked list length is less than n
    }
    p2 = p2.next;
  }

  // Move both pointers until p2 reaches the end
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1.value;
}
const head = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
const n = 2;

const result = findNthNodeFromEnd(head, n);
console.log(result); // Output: 2
