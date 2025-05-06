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

  // Step 1: Find the midpoint using slow and fast pointers
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half of the list
  let secondHalfHead: ListNode | null = reverseList(slow);

  // Save second half head to restore list later if needed
  let copySecondHalfHead = secondHalfHead;

  // Step 3: Compare two halves
  let firstHalfHead: ListNode | null = head;
  let palindrome = true;
  while (secondHalfHead) {
    if (firstHalfHead!.val !== secondHalfHead.val) {
      palindrome = false;
      break;
    }
    firstHalfHead = firstHalfHead!.next;
    secondHalfHead = secondHalfHead.next;
  }

  // Step 4: Optional - restore the list
  reverseList(copySecondHalfHead);

  // Step 5: Return result
  return palindrome;
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
