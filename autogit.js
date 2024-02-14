class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: [],
  E: []
};
function bfs(graph, startNode) {
  const visited = new Set(); // To keep track of visited nodes
  const queue = new Queue(); // Initialize the queue

  visited.add(startNode);
  queue.enqueue(startNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    console.log(currentNode); // Process the current node (you can modify this according to your use case)

    const neighbors = graph[currentNode];
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
}
bfs(graph, 'A');
