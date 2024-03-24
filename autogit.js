class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findIntersection(list1, list2) {
  let set = new Set();
  let intersection = null;

  // Traverse through the first linked list and store values in a set
  let current = list1;
  while (current !== null) {
    set.add(current.value);
    current = current.next;
  }

  // Traverse through the second linked list and check for intersection
  current = list2;
  while (current !== null) {
    if (set.has(current.value)) {
      intersection = current;
      break;
    }
    current = current.next;
  }

  return intersection;
}

// Example linked list nodes
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

// Creating linked lists
node1.next = node2;
node2.next = node3;
node3.next = node4;

let list1 = node1;

let nodeA = new Node(8);
let nodeB = new Node(3);

nodeA.next = nodeB;
nodeB.next = node3;

let list2 = nodeA;

// Find intersection of two linked lists
let intersectionNode = findIntersection(list1, list2);

console.log(intersectionNode); // Output: Node { value: 3, next: Node { value: 4, next: null } }
