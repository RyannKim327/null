class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return true; // Empty or single element list is palindrome
  }

  // Step 1: Find the middle of the linked list (fast & slow pointers)
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the list
  let secondHalfHead = reverseList(slow);

  // Step 3: Compare the first half and the reversed second half
  let firstHalfHead: ListNode | null = head;
  let secondHalfIter = secondHalfHead;

  while (secondHalfIter) {
    if (firstHalfHead!.val !== secondHalfIter.val) {
      return false;
    }
    firstHalfHead = firstHalfHead!.next;
    secondHalfIter = secondHalfIter.next;
  }

  // Optional: Restore the original list (reverse again)
  reverseList(secondHalfHead);

  return true;
}

// Helper to reverse a linked list
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
}
