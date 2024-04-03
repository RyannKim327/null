class Node {
  constructor(value, cost, parent) {
    this.value = value;
    this.cost = cost;
    this.parent = parent;
  }
}

function beamSearch(graph, start, goal, beamWidth) {
  let frontiers = [new Node(start, 0, null)];

  while (frontiers.length > 0) {
    let nextFrontiers = [];

    frontiers.forEach((node) => {
      if (node.value === goal) {
        // Found goal, reconstruct path
        let path = [node.value];
        while (node.parent) {
          path.unshift(node.parent.value);
          node = node.parent;
        }
        return path;
      }

      graph[node.value].forEach((neighbor) => {
        let newCost = node.cost + neighbor.cost;
        let newNode = new Node(neighbor.node, newCost, node);

        nextFrontiers.push(newNode);
      });
    });

    // Select top beamWidth nodes based on cost
    nextFrontiers.sort((a, b) => a.cost - b.cost);
    frontiers = nextFrontiers.slice(0, beamWidth);
  }

  return null; // No path found
}

// Example graph
const graph = {
  A: [{ node: 'B', cost: 5 }, { node: 'C', cost: 3 }],
  B: [{ node: 'D', cost: 2 }, { node: 'E', cost: 4 }],
  C: [{ node: 'F', cost: 7 }, { node: 'G', cost: 6 }],
  D: [{ node: 'H', cost: 1 }],
  E: [{ node: 'H', cost: 3 }],
  F: [{ node: 'H', cost: 8 }],
  G: [{ node: 'H', cost: 5 }],
  H: [],
};

const start = 'A';
const goal = 'H';
const beamWidth = 2;

const path = beamSearch(graph, start, goal, beamWidth);

if (path) {
  console.log('Shortest path:', path.join(' -> '));
} else {
  console.log('No path found');
}
