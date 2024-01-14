class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}
function breadthLimitedSearch(root, limit) {
  if (!root) return null;

  const queue = [];
  queue.push(root);

  let depth = 0;

  while (queue.length > 0 && depth <= limit) {
    const node = queue.shift();

    console.log(`Visiting node: ${node.value}`);

    if (depth < limit) {
      node.children.forEach(child => {
        queue.push(child);
      });
    }

    if (queue[0] && depth !== getNodeDepth(queue[0])) {
      depth++;
    }
  }
}
function getNodeDepth(node) {
  let depth = 0;
  let currNode = node;

  while (currNode) {
    depth++;
    currNode = currNode.parent;
  }

  return depth;
}
const rootNode = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');

rootNode.children = [nodeB, nodeC];
nodeB.children = [nodeD, nodeE];
nodeC.children = [nodeF];

breadthLimitedSearch(rootNode, 2);
Visiting node: A
Visiting node: B
Visiting node: C
Visiting node: D
Visiting node: E
Visiting node: F
