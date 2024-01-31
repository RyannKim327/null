function getIntersection(list1, list2) {
  let pointer1 = list1;
  let pointer2 = list2;

  while (pointer1 !== pointer2) {
    pointer1 = pointer1 ? pointer1.next : list2;
    pointer2 = pointer2 ? pointer2.next : list1;
  }

  return pointer1; // returns the intersection node or null if there is no intersection
}
