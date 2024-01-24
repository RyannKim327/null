function hasCycle(head) {
  let tortoise = head;
  let hare = head;

  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;

    if (tortoise === hare) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle found
}
const myList = /* create the linked list */;

console.log(hasCycle(myList)); // Output: true or false
