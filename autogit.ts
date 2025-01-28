class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function findMiddleElement<T>(head: Node<T>): T | null {
  let slow: Node<T> | null = head;
  let fast: Node<T> | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast!.next!.next;
  }

  return slow ? slow.value : null;
}
function findMiddleElementRecursive<T>(head: Node<T>, depth: number = 0): T | null {
  if (head === null) return null;

  const mid = findMiddleElementRecursive(head.next, depth + 1);

  if (mid === null) {
    return head.value;
  } else if (depth % 2 === 0) {
    return head.value;
  } else {
    return mid;
  }
}
function findMiddleElementStack<T>(head: Node<T>): T | null {
  const stack: T[] = [];

  let current: Node<T> | null = head;
  while (current !== null) {
    stack.push(current.value);
    current = current.next;
  }

  const mid = Math.floor(stack.length / 2);
  return stack[mid];
}
