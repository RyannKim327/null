class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  // Reverse the linked list
  let reversed = reverseList(head);
  
  // Compare the original list with the reversed list
  let current = head;
  let reversedCurrent = reversed;
  while (current && reversedCurrent) {
    if (current.val !== reversedCurrent.val) {
      return false;
    }
    current = current.next;
    reversedCurrent = reversedCurrent.next;
  }
  
  // If we reached the end of both lists, the original list is a palindrome
  return true;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
function isPalindrome(head: ListNode | null): boolean {
  let stack: number[] = [];
  
  // Push values onto the stack
  let current = head;
  while (current) {
    stack.push(current.val);
    current = current.next;
  }
  
  // Check if the list is a palindrome
  current = head;
  while (current) {
    if (current.val !== stack.pop()) {
      return false;
    }
    current = current.next;
  }
  
  return true;
}
