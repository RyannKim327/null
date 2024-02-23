class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

function depthLimitedSearch(root, goal, depthLimit) {
  let stack = [[root, 0]];

  while (stack.length > 0) {
    let [node, depth] = stack.pop();

    if (node.value === goal) {
      return node;
    }

    if (depth < depthLimit) {
      for (let child of node.children) {
        stack.push([child, depth + 1]);
      }
    }
  }

  return null;
}

// Example usage
let root = new Node(1);
let child1 = new Node(2);
let child2 = new Node(3);
root.addChild(child1);
root.addChild(child2);

let result = depthLimitedSearch(root, 3, 2);
console.log(result); // Output: Node { value: 3, children: [] }
