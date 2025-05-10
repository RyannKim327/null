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

  // Find the midpoint (slow will point to middle)
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse the second half
  let secondHalfHead = reverseList(slow);

  // Compare the two halves
  let firstHalfHead = head;
  let secondHalfIter = secondHalfHead;
  let palindrome = true;

  while (secondHalfIter) {
    if (firstHalfHead!.val !== secondHalfIter.val) {
      palindrome = false;
      break;
    }
    firstHalfHead = firstHalfHead!.next;
    secondHalfIter = secondHalfIter.next;
  }

  // (Optional) Restore the list
  reverseList(secondHalfHead);

  return palindrome;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
}
