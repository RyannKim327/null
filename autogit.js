class Node {
  constructor(value, parent, cost) {
    this.value = value;
    this.parent = parent;
    this.cost = cost;
  }
}

function beamSearch(startNode, goalTest, successors, beamWidth) {
  let openNodes = [startNode];

  while (openNodes.length > 0) {
    let candidates = [];

    for (let node of openNodes) {
      if (goalTest(node.value)) {
        return node; // Found goal node
      }

      let children = successors(node);

      for (let child of children) {
        candidates.push(child);
      }
    }

    candidates.sort((a, b) => a.cost - b.cost);
    openNodes = candidates.slice(0, beamWidth); // Select top candidates based on beam width
  }

  return null; // Goal not found
}

// Example usage
let startNode = new Node(0, null, 0);
let goalTest = (value) => value === 5;
let successors = (node) => [
  new Node(node.value + 1, node, node.cost + 1),
  new Node(node.value + 2, node, node.cost + 1),
];

let beamWidth = 2;
let result = beamSearch(startNode, goalTest, successors, beamWidth);

if (result) {
  // Reconstruct path
  let path = [];
  while (result) {
    path.unshift(result.value);
    result = result.parent;
  }
  console.log("Path found:", path);
} else {
  console.log("Goal not found");
}
