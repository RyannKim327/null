function hasCycle(head) {
  if (head === null || head.next === null) {
    return false;
  }

  let tortoise = head;
  let hare = head.next;

  while (tortoise != hare) {
    if (hare === null || hare.next === null) {
      return false;
    }
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  return true;
}
// Linked list without a cycle
const list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

console.log(hasCycle(list1));  // Output: false

// Linked list with a cycle
const list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

// Creating a cycle by connecting the last node to the second node
list2.next.next.next = list2.next;

console.log(hasCycle(list2));  // Output: true
