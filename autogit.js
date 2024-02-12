class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  enqueue(node, priority) {
    this.nodes.push({ node, priority });
    this.nodes.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.nodes.shift().node;
  }

  isEmpty() {
    return !this.nodes.length;
  }
}

function dijkstra(graph, source, target) {
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue();

  // Initialize distances and previous nodes
  for (let node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  
  distances[source] = 0;
  queue.enqueue(source, 0);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();

    // If target node reached, build and return the shortest path
    if (currentNode === target) {
      const path = [];
      let node = target;
      while (node !== null) {
        path.unshift(node);
        node = previous[node];
      }
      return path;
    }

    // Loop through neighbors of the current node
    for (let neighbor in graph[currentNode]) {
      const weight = graph[currentNode][neighbor];
      const distance = distances[currentNode] + weight;

      // If a shorter path is found, update distance and previous node
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentNode;
        queue.enqueue(neighbor, distance);
      }
    }
  }

  // If target node not reached, return null
  return null;
}

// Example usage
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 1 },
  D: { B: 3, C: 1, E: 4 },
  E: { D: 4 }
};

const path = dijkstra(graph, 'A', 'E');
console.log(path); // Output: ['A', 'C', 'D', 'E']
