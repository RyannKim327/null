class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  // Step 1: Find the middle using slow and fast pointers
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half
  let prev: ListNode | null = null;
  let curr: ListNode | null = slow;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // Step 3: Compare the first half and reversed second half
  let left: ListNode | null = head;
  let right: ListNode | null = prev;

  while (right) {
    if (left!.value !== right.value) return false;
    left = left!.next;
    right = right.next;
  }

  return true;
}
