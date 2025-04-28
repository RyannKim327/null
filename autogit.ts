class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}
function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true; // Empty or single node

  // Find middle (slow/fast pointer)
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  // 'slow' is now at middle

  // Reverse second half
  let prev: ListNode | null = null;
  let current: ListNode | null = slow;

  while (current) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  // Compare first half and reversed second half
  let firstHalf: ListNode | null = head;
  let secondHalf: ListNode | null = prev;

  while (secondHalf) {
    if (firstHalf!.value !== secondHalf.value) return false;
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }

  return true;
}
