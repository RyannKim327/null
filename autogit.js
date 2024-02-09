class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}
function breadthLimitedSearch(root, limit) {
  if (!root) return;

  const queue = [[root, 0]];
  const result = [];

  while (queue.length > 0) {
    const [node, depth] = queue.shift();
    result.push(node.value);

    if (depth < limit) {
      for (let child of node.children) {
        queue.push([child, depth + 1]);
      }
    }
  }

  return result;
}
const root = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');
const nodeG = new Node('G');
const nodeH = new Node('H');

root.addChild(nodeB);
root.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeC.addChild(nodeF);
nodeC.addChild(nodeG);
nodeE.addChild(nodeH);
console.log(breadthLimitedSearch(root, 2)); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
