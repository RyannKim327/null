class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

function findIntersection(list1: ListNode, list2: ListNode): ListNode | null {
  const hashTable: { [key: number]: ListNode } = {};

  let current = list1;
  while (current) {
    hashTable[current.value] = current;
    current = current.next;
  }

  current = list2;
  while (current) {
    if (hashTable[current.value]) {
      return current;
    }
    current = current.next;
  }

  return null;
}
function findIntersection(list1: ListNode, list2: ListNode): ListNode | null {
  let p1 = list1;
  let p2 = list2;

  while (p1 !== p2) {
    p1 = p1.next || list2;
    p2 = p2.next || list1;
  }

  return p1;
}
