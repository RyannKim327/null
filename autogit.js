function getIntersection(list1, list2) {
  if (!list1 || !list2) {
    return null;
  }

  let len1 = getListLength(list1);
  let len2 = getListLength(list2);
  let diff = Math.abs(len1 - len2);

  let ptr1 = list1;
  let ptr2 = list2;

  if (len1 > len2) {
    while (diff > 0) {
      ptr1 = ptr1.next;
      diff--;
    }
  } else if (len2 > len1) {
    while (diff > 0) {
      ptr2 = ptr2.next;
      diff--;
    }
  }

  while (ptr1 && ptr2) {
    if (ptr1 === ptr2) {
      return ptr1;
    }
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return null;
}

// Helper function to calculate the length of a linked list
function getListLength(head) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  return length;
}
