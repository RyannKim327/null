function Node(value) {
  this.value = value;
  this.children = [];
}

// Example tree structure for demonstration
const tree = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');
const nodeG = new Node('G');
const nodeH = new Node('H');
tree.children.push(nodeB, nodeC);
nodeB.children.push(nodeD, nodeE);
nodeC.children.push(nodeF);
nodeD.children.push(nodeG);
nodeG.children.push(nodeH);

/**
 * Depth-Limited Search algorithm implementation
 * @param {Node} node - The starting node
 * @param {string} target - The target value to search for
 * @param {number} depthLimit - The maximum depth limit
 * @param {number} currentDepth - The current depth of the node
 * @returns {Node|null} - The found node or null if not found
 */
function depthLimitedSearch(node, target, depthLimit, currentDepth = 0) {
  // Base case: Check if the node matches the target
  if (node.value === target) {
    return node;
  }

  // Base case: Check if the depth limit has been reached
  if (currentDepth >= depthLimit) {
    return null;
  }

  // Recursive case: Iterate through the children and search deeper
  for (let childNode of node.children) {
    const result = depthLimitedSearch(childNode, target, depthLimit, currentDepth + 1);
    if (result) {
      return result; // Return if the target is found in a child node
    }
  }

  return null; // Return null if no matching node found within the depth limit
}

// Example usage:
const result = depthLimitedSearch(tree, 'H', 3);
console.log(result); // Output: Node { value: 'H', children: [] }
