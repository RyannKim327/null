function getLinkedListLength(head) {
  let count = 0; // Initialize count variable

  let current = head; // Start traversal from the head node

  while (current !== null) {
    // Traverse until current node becomes null
    count++;
    current = current.next; // Move to the next node
  }

  return count;
}
