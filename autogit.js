class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createLinkedList(values) {
  let head = null;
  let tail = null;

  for (let val of values) {
    const newNode = new ListNode(val);
    if (!head) {
      head = tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  return head;
}
function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
function isLinkedListPalindrome(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast) {
    slow = slow.next; // Ignoring middle element for odd-length lists
  }

  let reversed = reverseLinkedList(slow);

  while (reversed) {
    if (reversed.val !== head.val) {
      return false;
    }
    reversed = reversed.next;
    head = head.next;
  }

  return true;
}
const values = [1, 2, 3, 2, 1];
const linkedList = createLinkedList(values);

console.log(isLinkedListPalindrome(linkedList)); // Output: true
