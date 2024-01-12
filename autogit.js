function getLength(head) {
  let length = 0;
  while (head !== null) {
    length++;
    head = head.next;
  }
  return length;
}
let length1 = getLength(list1);
let length2 = getLength(list2);
let longer = length1 > length2 ? list1 : list2;
let shorter = length1 > length2 ? list2 : list1;
let diff = Math.abs(length1 - length2);
while (diff > 0) {
  longer = longer.next;
  diff--;
}
while (longer !== null && shorter !== null && longer !== shorter) {
  longer = longer.next;
  shorter = shorter.next;
}
if (longer === shorter) {
  return longer;
} else {
  return null;
}
