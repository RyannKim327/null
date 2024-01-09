// Node class representing a state in your search problem
class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
}

// Iterative depth-limited search algorithm
function depthLimitedSearch(root, goal, depthLimit) {
  let stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    // Pop the top node from the stack
    let { node, depth } = stack.pop();

    // Check if the current node matches the goal
    if (node.value === goal) {
      return node;
    }

    // Check if depth limit is reached
    if (depth < depthLimit) {
      // Push children nodes onto the stack
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ node: node.children[i], depth: depth + 1 });
        }
      }
    }
  }

  return null; // Return null if goal not found within depth limit
}

// Example usage
let nodeG = new Node('G');
let nodeF = new Node('F');
let nodeE = new Node('E', [nodeG]);
let nodeD = new Node('D');
let nodeC = new Node('C', [nodeF]);
let nodeB = new Node('B', [nodeD, nodeE]);
let nodeA = new Node('A', [nodeB, nodeC]);

let result = depthLimitedSearch(nodeA, 'G', 2);
console.log(result); // Output: Node { value: 'G', children: undefined }
