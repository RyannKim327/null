class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
  addChild(node) {
    this.children.push(node);
  }
}

function biDirectionalSearch(startNode, goalNode) {
  // Initialize the frontiers for the start and goal searches
  const startFrontier = [startNode];
  const goalFrontier = [goalNode];

  while (startFrontier.length > 0 && goalFrontier.length > 0) {
    // Explore from the start node
    const startNode = startFrontier.shift();
    if (startNode === goalNode || goalFrontier.includes(startNode)) {
      return true;  // Goal node found
    }
    startFrontier.push(...startNode.children);
    
    // Explore from the goal node
    const goalNode = goalFrontier.shift();
    if (goalNode === startNode || startFrontier.includes(goalNode)) {
      return true;  // Goal node found
    }
    goalFrontier.push(...goalNode.children);
  }
  
  return false;  // Goal node not found
}

// Example usage
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');

a.addChild(b);
a.addChild(c);
b.addChild(d);
c.addChild(d);
c.addChild(e);
e.addChild(f);

const startNode = a;
const goalNode = f;

console.log(biDirectionalSearch(startNode, goalNode));  // Output: true
