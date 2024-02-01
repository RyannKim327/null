function getIntersection(list1, list2) {
  // Calculate the lengths of both linked lists
  let length1 = 0, length2 = 0;
  let temp1 = list1, temp2 = list2;

  while (temp1 != null) {
    length1++;
    temp1 = temp1.next;
  }
  while (temp2 != null) {
    length2++;
    temp2 = temp2.next;
  }

  // Calculate the difference in lengths
  let diff = Math.abs(length1 - length2);

  // Traverse the longer linked list by the difference
  temp1 = list1;
  temp2 = list2;

  if (length1 > length2) {
    for (let i = 0; i < diff; i++) {
      temp1 = temp1.next;
    }
  } else {
    for (let i = 0; i < diff; i++) {
      temp2 = temp2.next;
    }
  }

  // Iterate both lists at the same pace until common node is found
  while (temp1 != null && temp2 != null) {
    if (temp1 === temp2) {
      return temp1; // Found common node
    }
    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  return null; // No common node found
}
