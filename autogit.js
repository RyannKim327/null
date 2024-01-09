function getIntersection(list1, list2) {
  let ptr1 = list1.head;
  let ptr2 = list2.head;

  while (ptr1 !== ptr2) {
    if (ptr1 === null) {
      ptr1 = list2.head;
    } else {
      ptr1 = ptr1.next;
    }

    if (ptr2 === null) {
      ptr2 = list1.head;
    } else {
      ptr2 = ptr2.next;
    }
  }

  return ptr1; // or ptr2, since they are equal
}
