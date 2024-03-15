class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

function breadthLimitedSearch(root, limit) {
  let queue = [root];
  let level = 1;

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node.data);

    if (level < limit) {
      node.children.forEach(child => {
        queue.push(child);
      });
    }

    if (queue.length === 0 && level < limit) {
      level++;
      queue = root.children.slice();
    }
  }
}

// Example usage
let root = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');
let nodeD = new Node('D');
let nodeE = new Node('E');
let nodeF = new Node('F');

root.addChild(nodeB);
root.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeE.addChild(nodeF);

breadthLimitedSearch(root, 2);
