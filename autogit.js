class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;
}

function isLinkedListPalindrome(head) {
  if (!head || !head.next) {
    // An empty list or a list with a single node is considered a palindrome
    return true;
  }

  let slow = head;
  let fast = head;
  let prevSlow = head;
  let middleNode = null;
  let isPalindrome = true;

  while (fast && fast.next) {
    fast = fast.next.next;
    prevSlow = slow;
    slow = slow.next;
  }

  // If the linked list has an odd number of nodes, fast will not be null
  if (fast) {
    middleNode = slow;
    slow = slow.next;
  }

  prevSlow.next = null; // Break the list into two halves

  // Reverse the second half of the linked list
  let reversedHalf = reverseLinkedList(slow);

  let temp1 = head;
  let temp2 = reversedHalf;

  // Compare the first half with the reversed second half
  while (temp2) {
    if (temp1.value !== temp2.value) {
      isPalindrome = false;
      break;
    }

    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  // Restore the original linked list by reversing the reversed half back
  reversedHalf = reverseLinkedList(reversedHalf);

  // Restore the original second half by re-attaching the middle node
  if (middleNode) {
    prevSlow.next = middleNode;
    middleNode.next = reversedHalf;
  } else {
    prevSlow.next = reversedHalf;
  }

  return isPalindrome;
}
// Create a sample linked list: 1->2->3->2->1
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

console.log(isLinkedListPalindrome(head)); // Output: true
