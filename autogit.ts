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

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  // Find middle (slow will be at the midpoint)
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let secondHalf = reverseList(slow);

  // Compare first half and reversed second half
  let firstHalf = head;
  let secondHalfCopy = secondHalf; // to restore later if needed
  let palindrome = true;

  while (secondHalf) {
    if (firstHalf!.val !== secondHalf.val) {
      palindrome = false;
      break;
    }
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }

  // Optional: Restore the list
  reverseList(secondHalfCopy);

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
