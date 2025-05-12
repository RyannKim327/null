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

  // Step 1: Find middle (slow will point to middle)
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half starting from slow
  let secondHalf: ListNode | null = reverseList(slow);

  // Step 3: Compare first half and reversed second half
  let firstHalf: ListNode | null = head;
  let copySecondHalf = secondHalf; // Keep pointer to restore later

  while (secondHalf) {
    if (firstHalf!.val !== secondHalf.val) {
      // (Optional) Step 4: Restore list before returning
      reverseList(copySecondHalf);
      return false;
    }
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }

  // Step 4: Restore list (optional)
  reverseList(copySecondHalf);

  return true;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}
