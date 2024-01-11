function hasCycle(head) {
  if (head === null || head.next === null) {
    // If the linked list is empty or contains only one node, there can't be a cycle
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      // If the fast pointer reaches the end of the list, it means there is no cycle
      return false;
    }

    // Move the slow pointer one step and the fast pointer two steps
    slow = slow.next;
    fast = fast.next.next;
  }

  // If the while loop terminates because slow and fast are equal, it means there is a cycle
  return true;
}
const listWithCycle = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
};

// Create a cycle in the linked list
listWithCycle.next.next.next.next = listWithCycle.next;

console.log(hasCycle(listWithCycle)); // Output: true

const listWithoutCycle = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
};

console.log(hasCycle(listWithoutCycle)); // Output: false
