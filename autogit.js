function findLinkedListLength(head) {
  let count = 0; // Initialize count variable to 0
  let current = head; // Start at the head of the linked list

  while (current !== null) {
    count++; // Increment the count
    current = current.next; // Move to the next node
  }

  return count; // Return the length of the linked list
}
// Define a linked list with 3 nodes
let node1 = { value: 1, next: null };
let node2 = { value: 2, next: null };
let node3 = { value: 3, next: null };

node1.next = node2; // Link the nodes together
node2.next = node3;

console.log(findLinkedListLength(node1)); // Output: 3
