class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function isPalindrome(head: Node<string> | null): boolean {
  if (!head) return true; // empty list is a palindrome

  // reverse the linked list
  let reversed: Node<string> | null = null;
  let current = head;
  while (current) {
    const temp = current.next;
    current.next = reversed;
    reversed = current;
    current = temp;
  }

  // compare the original list with the reversed list
  let original = head;
  let reversedCurrent = reversed;
  while (original && reversedCurrent) {
    if (original.value !== reversedCurrent.value) return false;
    original = original.next;
    reversedCurrent = reversedCurrent.next;
  }

  return true;
}
class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function isPalindrome(head: Node<string> | null): boolean {
  if (!head) return true; // empty list is a palindrome

  const stack: string[] = [];
  let current = head;

  // push values onto the stack
  while (current) {
    stack.push(current.value);
    current = current.next;
  }

  // compare values with the stack
  current = head;
  while (current) {
    if (current.value !== stack.pop()) return false;
    current = current.next;
  }

  return true;
}
const list: Node<string> | null = new Node('a');
list.next = new Node('b');
list.next.next = new Node('c');
list.next.next.next = new Node('b');
list.next.next.next.next = new Node('a');

console.log(isPalindrome(list)); // true

const notPalindrome: Node<string> | null = new Node('a');
notPalindrome.next = new Node('b');
notPalindrome.next.next = new Node('c');
notPalindrome.next.next.next = new Node('d');

console.log(isPalindrome(notPalindrome)); // false
