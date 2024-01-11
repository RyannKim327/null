function initializeGraph(vertices, edges) {
  const graph = {};
  for (let vertex of vertices) {
    graph[vertex] = [];
  }
  for (let edge of edges) {
    const [start, end, weight] = edge;
    graph[start].push({ end, weight });
  }
  return graph;
}
function bellmanFord(graph, source) {
  const distance = {};
  for (let vertex in graph) {
    distance[vertex] = Infinity;
  }
  distance[source] = 0;
}
for (let i = 0; i < Object.keys(graph).length - 1; i++) {
  for (let start in graph) {
    for (let { end, weight } of graph[start]) {
      distance[end] = Math.min(distance[end], distance[start] + weight);
    }
  }
}
for (let start in graph) {
  for (let { end, weight } of graph[start]) {
    if (distance[end] > distance[start] + weight) {
      throw new Error('Graph contains a negative-weight cycle');
    }
  }
}
return distance;
function initializeGraph(vertices, edges) {
  const graph = {};
  for (let vertex of vertices) {
    graph[vertex] = [];
  }
  for (let edge of edges) {
    const [start, end, weight] = edge;
    graph[start].push({ end, weight });
  }
  return graph;
}

function bellmanFord(graph, source) {
  const distance = {};
  for (let vertex in graph) {
    distance[vertex] = Infinity;
  }
  distance[source] = 0;

  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let start in graph) {
      for (let { end, weight } of graph[start]) {
        distance[end] = Math.min(distance[end], distance[start] + weight);
      }
    }
  }

  for (let start in graph) {
    for (let { end, weight } of graph[start]) {
      if (distance[end] > distance[start] + weight) {
        throw new Error('Graph contains a negative-weight cycle');
      }
    }
  }

  return distance;
}

// Example Usage
const vertices = ['A', 'B', 'C', 'D', 'E'];
const edges = [
  ['A', 'B', 4],
  ['A', 'C', 2],
  ['B', 'D', 5],
  ['C', 'B', -1],
  ['C', 'D', 6],
  ['D', 'E', 3],
];

const graph = initializeGraph(vertices, edges);
const source = 'A';
const shortestDistances = bellmanFord(graph, source);
console.log(shortestDistances);
