class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findIntersection(list1, list2) {
  let set = new Set();

  let current1 = list1;
  while (current1) {
    set.add(current1);
    current1 = current1.next;
  }

  let current2 = list2;
  while (current2) {
    if (set.has(current2)) {
      return current2;
    }
    current2 = current2.next;
  }

  return null;
}

// Example usage
// Construct linked lists
let list1 = new Node(1);
list1.next = new Node(2);
let intersectionNode = new Node(3);
list1.next.next = intersectionNode;

let list2 = new Node(4);
list2.next = intersectionNode;

let intersection = findIntersection(list1, list2);
console.log("Intersection node value: " + intersection.value); // Output: Intersection node value: 3
