class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  // Find middle (slow will point to middle)
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let prev: ListNode | null = null;
  let curr: ListNode | null = slow;
  while (curr) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  // Compare first half and reversed second half
  let firstHalf: ListNode | null = head;
  let secondHalf: ListNode | null = prev;
  while (secondHalf) {
    if (firstHalf!.val !== secondHalf.val) return false;
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }

  return true;
}
