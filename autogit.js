class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function getIntersectionNode(headA, headB) {
  let set = new Set();
  
  // Traverse the first linked list and store all nodes in a set
  let temp = headA;
  while (temp !== null) {
    set.add(temp);
    temp = temp.next;
  }
  
  // Traverse the second linked list and check if each node exists in the set
  temp = headB;
  while (temp !== null) {
    if (set.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  
  return null; // Return null if no intersection found
}
// Creating linked list 1: 1 -> 2 -> 3
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.next = node3;

// Creating linked list 2: 4 -> 5 -> 3
let node4 = new Node(4);
let node5 = new Node(5);
node4.next = node5;
node5.next = node3; // Intersection point with linked list 1

// Find intersection node
let intersectionNode = getIntersectionNode(node1, node4);
console.log(intersectionNode); // Output: Node { value: 3, next: null }
