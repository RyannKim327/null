function findIntersection(list1, list2) {
  // Find the lengths of both linked lists
  let length1 = findLength(list1);
  let length2 = findLength(list2);

  // Find the difference in lengths
  let diff = Math.abs(length1 - length2);

  // Traverse the longer linked list until the difference in lengths is eliminated
  let longerList = (length1 > length2) ? list1 : list2;
  let shorterList = (length1 > length2) ? list2 : list1;

  for (let i = 0; i < diff; i++) {
    longerList = longerList.next;
  }

  // Traverse both linked lists until a common node is found
  while (longerList !== null && shorterList !== null) {
    if (longerList === shorterList) {
      return longerList;
    }
    longerList = longerList.next;
    shorterList = shorterList.next;
  }

  // If no intersection is found, return null
  return null;
}
function findLength(list) {
  let length = 0;
  let current = list;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}
// Create the first linked list: 1 -> 2 -> 3 -> 6 -> 7
let node1 = { value: 1, next: null };
let node2 = { value: 2, next: null };
let node3 = { value: 3, next: null };
let node6 = { value: 6, next: null };
let node7 = { value: 7, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node6;
node6.next = node7;

// Create the second linked list: 4 -> 5 -> 6 -> 7
let node4 = { value: 4, next: null };
let node5 = { value: 5, next: null };

node4.next = node5;
node5.next = node6;

// Find the intersection of the two linked lists
let intersection = findIntersection(node1, node4);

// Print the value of the common node
console.log(intersection ? intersection.value : "No intersection found");
