function breadthLimitedSearch(root, target, limit) {
  if (root === null) {
    return false;
  }

  let queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    if (depth === limit) {
      return false;
    }

    let currentNode = queue.shift();

    if (currentNode.value === target) {
      return true;
    }

    if (currentNode.children) {
      for (let child of currentNode.children) {
        queue.push(child);
      }
    }

    depth++;
  }

  return false;
}

// Usage
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// Create a tree structure
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

root.children.push(node2);
root.children.push(node3);
node2.children.push(node4);

// Search for value 4 with a limit of 2
console.log(breadthLimitedSearch(root, 4, 2)); // Output: true
