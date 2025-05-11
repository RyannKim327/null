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

  // Find midpoint using slow & fast pointers
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;
  }

  // Reverse second half of the list
  let secondHalf = reverseList(slow);

  // Compare first and second half
  let firstHalf = head;
  let secondHalfCopy = secondHalf; // To restore later if needed

  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) return false;
    firstHalf = firstHalf.next!;
    secondHalf = secondHalf.next!;
  }

  // Optional: Restore second half to original
  reverseList(secondHalfCopy);

  return true;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;
  while (curr) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
