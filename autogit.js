class Queue {
  constructor() {
    this.queue = [];
  }
  
  enqueue(item) {
    this.queue.push(item);
  }
  
  dequeue() {
    return this.queue.shift();
  }
  
  isEmpty() {
    return this.queue.length === 0;
  }
}

function breadthFirstSearch(graph, source) {
  const queue = new Queue();
  const visited = {};

  queue.enqueue(source);
  visited[source] = true;

  while (!queue.isEmpty()) {
    const vertex = queue.dequeue();
    console.log(vertex); // Or perform any other operation on the vertex

    const neighbors = graph[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!visited[neighbor]) {
        queue.enqueue(neighbor);
        visited[neighbor] = true;
      }
    }
  }
}
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: [],
  E: []
};

breadthFirstSearch(graph, 'A');
