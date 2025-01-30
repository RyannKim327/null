class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function findMiddleElement<T>(head: Node<T>): Node<T> | null {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next; // Move one step at a time
    fast = fast.next.next; // Move two steps at a time
  }

  return slow;
}
function findMiddleElementRecursive<T>(head: Node<T>, count: number = 0): Node<T> | null {
  if (head === null) return null;

  if (count === 0) {
    return head;
  }

  return findMiddleElementRecursive(head.next, count - 1);
}

function middleElement<T>(head: Node<T>): Node<T> | null {
  let count = 0;
  let current = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  return findMiddleElementRecursive(head, Math.floor(count / 2));
}
function findMiddleElementStack<T>(head: Node<T>): Node<T> | null {
  const stack: Node<T>[] = [];

  let current = head;
  while (current !== null) {
    stack.push(current);
    current = current.next;
  }

  const middleIndex = Math.floor(stack.length / 2);
  return stack[middleIndex];
}
