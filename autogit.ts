class ListNode<T> {
  val: T;
  next: ListNode<T> | null;

  constructor(val: T, next: ListNode<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}

function getNthFromEnd<T>(head: ListNode<T> | null, n: number): ListNode<T> | null {
  if (!head || n < 1) return null;
  
  let slow: ListNode<T> | null = head;
  let fast: ListNode<T> | null = head;

  // Move fast n steps ahead
  for (let i = 0; i < n; i++) {
    if (fast === null) return null; // list shorter than n
    fast = fast.next;
  }

  // Move both pointers until fast reaches the end
  while (fast !== null) {
    slow = slow!.next;
    fast = fast.next;
  }

  return slow;
}
