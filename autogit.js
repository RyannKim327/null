class Node {
  constructor(value, parent = null) {
    this.value = value;
    this.children = [];
    this.parent = parent;
  }

  addChild(value) {
    const child = new Node(value, this);
    this.children.push(child);
    return child;
  }
}
function breadthLimitedSearch(root, target, limit) {
  const queue = [{ node: root, depth: 0 }];

  while (queue.length > 0) {
    const { node, depth } = queue.shift();

    if (node.value === target) {
      return node;
    }

    if (depth < limit) {
      for (const child of node.children) {
        queue.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within the specified limit
}
// Sample search space:
//        A
//      / | \
//     B  C  D
//    / \   / \
//   E   F G   H

const root = new Node('A');
const nodeB = root.addChild('B');
const nodeC = root.addChild('C');
const nodeD = root.addChild('D');
const nodeE = nodeB.addChild('E');
const nodeF = nodeB.addChild('F');
const nodeG = nodeD.addChild('G');
const nodeH = nodeD.addChild('H');
const targetNode = breadthLimitedSearch(root, 'G', 2);

if (targetNode) {
  console.log('Target found:', targetNode.value);
} else {
  console.log('Target not found within the limit');
}
