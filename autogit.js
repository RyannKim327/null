class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  enqueue(node, priority) {
    this.nodes.push({ node, priority });
    this.sort();
  }

  dequeue() {
    return this.nodes.shift();
  }

  sort() {
    this.nodes.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.nodes.length === 0;
  }
}

function dijkstra(graph, startNode) {
  const distances = {};
  const previous = {};
  const priorityQueue = new PriorityQueue();
  
  distances[startNode] = 0;
  priorityQueue.enqueue(startNode, 0);

  for (let node in graph) {
    if (node !== startNode) {
      distances[node] = Infinity;
    }
    
    previous[node] = null;
  }

  while (!priorityQueue.isEmpty()) {
    let { node: currentNode } = priorityQueue.dequeue();

    for (let neighbor in graph[currentNode]) {
      let currentDistance = distances[currentNode];
      let edgeWeight = graph[currentNode][neighbor];
      let distance = currentDistance + edgeWeight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentNode;
        priorityQueue.enqueue(neighbor, distance);
      }
    }
  }

  return { distances, previous };
}

// Example graph
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

const startNode = 'A';
const { distances, previous } = dijkstra(graph, startNode);

console.log("Distances from node", startNode);
for (let node in distances) {
  console.log(`${node}: ${distances[node]}`);
}

console.log("\nShortest paths:");
for (let node in previous) {
  let path = [];
  for (let current = node; current; current = previous[current]) {
    path.unshift(current);
  }
  const distance = distances[node];
  console.log(`${node} (${distance}): ${path.join(' -> ')}`);
}
