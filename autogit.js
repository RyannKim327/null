class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

function breadthFirstSearch(root) {
  let queue = [];
  let result = [];
  
  if (root === null) {
    return result;
  }

  queue.push(root);

  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node.value);
    
    for (let child of node.children) {
      queue.push(child);
    }
  }

  return result;
}

// Example usage
let nodeA = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');
let nodeD = new Node('D');
let nodeE = new Node('E');

nodeA.addChild(nodeB);
nodeA.addChild(nodeC);
nodeB.addChild(nodeD);
nodeD.addChild(nodeE);

console.log(breadthFirstSearch(nodeA)); // Output: ['A', 'B', 'C', 'D', 'E']
