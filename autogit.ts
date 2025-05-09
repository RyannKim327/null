class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  // Find the end of first half
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast.next && fast.next.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let secondHalfStart = reverseList(slow!.next);
  let firstHalfStart = head;
  
  // Check palindrome
  let p1 = firstHalfStart;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2 !== null) {
    if (p1!.val !== p2.val) result = false;
    p1 = p1!.next;
    p2 = p2.next;
  }

  // Restore the list (optional)
  slow!.next = reverseList(secondHalfStart);

  return result;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
