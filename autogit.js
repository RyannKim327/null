class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findIntersection(list1, list2) {
  let list1Set = new Set();
  let intersectionNodes = [];

  // Traverse the first linked list and store node references in a set
  let current = list1;
  while (current) {
    list1Set.add(current);
    current = current.next;
  }

  // Traverse the second linked list and check for intersection
  current = list2;
  while (current) {
    if (list1Set.has(current)) {
      intersectionNodes.push(current);
    }
    current = current.next;
  }

  return intersectionNodes;
}

// Example linked list creation
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let nodeA = new Node('A');
let nodeB = new Node('B');
let nodeC = node3; // Intersection point
let nodeD = new Node('D');

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

// Find intersection of the two linked lists
let intersectionNodes = findIntersection(node1, nodeA);

console.log(intersectionNodes);
