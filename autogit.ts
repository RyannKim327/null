class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}
function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  // Find the middle of the list (slow will end up at middle)
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let secondHalfHead = reverseList(slow);

  // Compare the first half and the reversed second half
  let firstHalfPointer = head;
  let secondHalfPointer = secondHalfHead;
  let result = true;

  while (secondHalfPointer) {
    if (firstHalfPointer!.value !== secondHalfPointer.value) {
      result = false;
      break;
    }
    firstHalfPointer = firstHalfPointer!.next;
    secondHalfPointer = secondHalfPointer.next;
  }

  // (Optional) Restore the original list by reversing the second half back
  reverseList(secondHalfHead);

  return result;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current) {
    const nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  return prev;
}
