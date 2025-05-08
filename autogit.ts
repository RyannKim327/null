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

  // Find middle (slow will point to middle)
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let secondHalf: ListNode | null = reverseList(slow);

  // Compare first half and reversed second half
  let firstHalf: ListNode | null = head;
  while (secondHalf) {
    if (firstHalf!.val !== secondHalf.val) return false;
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }
  return true;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr) {
    let nextTemp: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
