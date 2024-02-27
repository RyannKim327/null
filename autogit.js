class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class DepthFirstSearch {
  constructor() {
    this.visited = new Set();
  }

  search(node) {
    if (!node || this.visited.has(node)) {
      return;
    }

    console.log(node.value);
    this.visited.add(node);

    for (let child of node.children) {
      this.search(child);
    }
  }
}

// Usage
const rootNode = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const grandChild1 = new Node(4);
const grandChild2 = new Node(5);

rootNode.children.push(child1, child2);
child1.children.push(grandChild1);
child2.children.push(grandChild2);

const dfs = new DepthFirstSearch();
dfs.search(rootNode);
