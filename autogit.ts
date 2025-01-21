class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

function findNthNodeFromEnd<T>(head: ListNode<T>, n: number): ListNode<T> | null {
  if (head === null || n <= 0) {
    return null;
  }

  let main = head;
  let ref = head;

  // Move ref pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (ref === null) {
      return null; // n is larger than the list length
    }
    ref = ref.next;
  }

  // Move both pointers one step at a time
  while (ref !== null) {
    main = main.next;
    ref = ref.next;
  }

  return main;
}
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

const nthNode = findNthNodeFromEnd(list, 2);
console.log(nthNode?.value); // Output: 3
