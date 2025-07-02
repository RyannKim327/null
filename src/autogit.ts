class ListNode {
  value: number;
  next: ListNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class LinkedList {
  head: ListNode | null = null;

  // Method to append node to the linked list
  append(value: number) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Method to find the nth node from the end
  findNthFromEnd(n: number): ListNode | null {
    let fast = this.head;
    let slow = this.head;

    // Move fast n steps ahead
    for (let i = 0; i < n; i++) {
      if (fast === null) {
        return null; // n is larger than the length of the list
      }
      fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow; // slow is now at the nth node from the end
  }
}

// Example usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

const n = 2; // For example, to get the 2nd node from the end
const resultNode = list.findNthFromEnd(n);

if (resultNode) {
  console.log(`The ${n}th node from the end is: ${resultNode.value}`);
} else {
  console.log(`The list is shorter than ${n} nodes.`);
}
