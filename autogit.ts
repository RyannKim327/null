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

  // Find middle (slow will be at middle)
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse second half starting from slow
  let secondHalf: ListNode | null = reverseList(slow);

  // Compare first half and reversed second half
  let firstHalf: ListNode | null = head;
  let secondHalfCopy: ListNode | null = secondHalf; // to optionally restore list later

  while (secondHalf !== null) {
    if (firstHalf!.val !== secondHalf.val) {
      // Optional: restore list before returning
      reverseList(secondHalfCopy);
      return false;
    }
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }

  // Optional: restore list
  reverseList(secondHalfCopy);
  return true;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  
  return prev;
}
