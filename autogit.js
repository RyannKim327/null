function getIntersection(list1, list2) {
  let p1 = list1;
  let p2 = list2;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : list2; // Move to the next node or start of list2
    p2 = p2 ? p2.next : list1; // Move to the next node or start of list1
  }

  return p1; // Return null (no intersection) or the intersection node
}
