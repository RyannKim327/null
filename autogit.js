function depthLimitedSearch(node, goal, depthLimit) {
  return recursiveDLS(node, goal, depthLimit);

  function recursiveDLS(node, goal, depth) {
    if (depth === 0) {
      return null; // Max depth reached
    }

    if (node === goal) {
      return node; // Goal found
    }

    for (let child of node.children) {
      let result = recursiveDLS(child, goal, depth - 1);

      if (result !== null) {
        return result; // Forward the success result
      }
    }

    return null; // Goal not found within depth limit
  }
}
// Example graph structure
class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

let goalNode = new Node("goal");
let node1 = new Node("node1");
let node2 = new Node("node2");
let node3 = new Node("node3");
let rootNode = new Node("root", [node1, node2, node3]);

let result = depthLimitedSearch(rootNode, goalNode, 3);
console.log(result); // Output: goal
