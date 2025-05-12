class ListNode {
  val: any;
  next: ListNode | null;

  constructor(val: any, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}
function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  // Step 1: Find middle of the list using slow and fast pointers
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = (slow as ListNode).next;
    fast = fast.next.next;
  }

  // Step 2: Reverse second half of the list
  let secondHalf = reverseList(slow);

  // Step 3: Compare first half and reversed second half
  let firstHalf = head;
  let secondHalfCopy = secondHalf; // to restore list later if needed
  let result = true;
  while (secondHalf) {
    if (firstHalf!.val !== secondHalf.val) {
      result = false;
      break;
    }
    firstHalf = firstHalf!.next;
    secondHalf = secondHalf.next;
  }

  // Optional Step 4: Restore the list to original structure
  reverseList(secondHalfCopy);

  return result;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;
  while (current) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}
