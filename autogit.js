function dijkstra(graph, startNode) {
  const distances = {};
  const previous = {};
  const priorityQueue = new PriorityQueue();
  
  distances[startNode] = 0;
  
  for (let node in graph) {
    if (node !== startNode) {
      distances[node] = Infinity;
    }
    
    priorityQueue.enqueue(node, distances[node]);
    previous[node] = null;
  }
  
  while (!priorityQueue.isEmpty()) {
    const currentNode = priorityQueue.dequeue();
    
    for (let neighbor in graph[currentNode]) {
      const currDistance = distances[currentNode] + graph[currentNode][neighbor];
      
      if (currDistance < distances[neighbor]) {
        distances[neighbor] = currDistance;
        previous[neighbor] = currentNode;
        priorityQueue.enqueue(neighbor, currDistance);
      }
    }
  }
  
  return { distances, previous };
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  
  dequeue() {
    return this.values.shift().value;
  }
  
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
  
  isEmpty() {
    return this.values.length === 0;
  }
}

// Example graph
const graph = {
  A: { B: 3, C: 4 },
  B: { A: 3, C: 1, D: 7 },
  C: { A: 4, B: 1, D: 2 },
  D: { B: 7, C: 2 }
};

const startNode = 'A';
const { distances, previous } = dijkstra(graph, startNode);

console.log(distances); // Output the distances from the start node
console.log(previous); // Output the shortest paths
