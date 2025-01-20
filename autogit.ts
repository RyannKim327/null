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
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow ? slow.value : null;
}
function findMiddleElement<T>(head: Node<T>): T | null {
  let count = 0;
  let current: Node<T> | null = head;

  // Count the number of elements
  while (current !== null) {
    count++;
    current = current.next;
  }

  current = head;
  const mid = Math.floor(count / 2);

  // Traverse the list again and return the middle element
  for (let i = 0; i < mid; i++) {
    current = current.next;
  }

  return current ? current.value : null;
}
function findMiddleElement<T>(head: Node<T>, mid: number = 0, count: number = 0): T | null {
  if (head === null) return null;

  const next = findMiddleElement(head.next, mid + 1, count + 1);

  if (next !== null) return next;

  if (mid === Math.floor(count / 2)) return head.value;

  return null;
}
