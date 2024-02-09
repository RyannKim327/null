function getNodeFromEnd(list, n) {
  let p1 = list;
  let p2 = list;

  // Move p2 n positions ahead
  for (let i = 0; i < n; i++) {
    if (p2 === null) {
      return "List has fewer than n nodes";
    }
    p2 = p2.next;
  }

  // Move both pointers until p2 reaches the end
  while (p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}
const head = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: null } } } };

console.log(getNodeFromEnd(head, 2)); // Output: { value: 3, next: { value: 4, next: null } }
