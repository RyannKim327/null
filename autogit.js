function topologicalSort(graph) {
  // ...
}
function topologicalSort(graph) {
  const indegreeMap = new Map();

  // Initialize all indegrees to 0
  for (let vertex in graph) {
    indegreeMap.set(vertex, 0);
  }
}
function topologicalSort(graph) {
  const indegreeMap = new Map();

  // Initialize all indegrees to 0
  for (let vertex in graph) {
    indegreeMap.set(vertex, 0);
  }

  // Calculate indegree of each vertex
  for (let vertex in graph) {
    for (let neighbor of graph[vertex]) {
      indegreeMap.set(neighbor, indegreeMap.get(neighbor) + 1);
    }
  }
}
function topologicalSort(graph) {
  const indegreeMap = new Map();

  // Initialize all indegrees to 0
  for (let vertex in graph) {
    indegreeMap.set(vertex, 0);
  }

  // Calculate indegree of each vertex
  for (let vertex in graph) {
    for (let neighbor of graph[vertex]) {
      indegreeMap.set(neighbor, indegreeMap.get(neighbor) + 1);
    }
  }

  const queue = [];
  for (let [vertex, indegree] of indegreeMap) {
    if (indegree === 0) {
      queue.push(vertex);
    }
  }
}
function topologicalSort(graph) {
  const indegreeMap = new Map();

  // Initialize all indegrees to 0
  for (let vertex in graph) {
    indegreeMap.set(vertex, 0);
  }

  // Calculate indegree of each vertex
  for (let vertex in graph) {
    for (let neighbor of graph[vertex]) {
      indegreeMap.set(neighbor, indegreeMap.get(neighbor) + 1);
    }
  }

  const queue = [];
  for (let [vertex, indegree] of indegreeMap) {
    if (indegree === 0) {
      queue.push(vertex);
    }
  }

  const result = [];
  while (queue.length > 0) {
    const vertex = queue.shift();
    result.push(vertex);

    for (let neighbor of graph[vertex]) {
      indegreeMap.set(neighbor, indegreeMap.get(neighbor) - 1);

      if (indegreeMap.get(neighbor) === 0) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}
const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D", "E"],
  D: [],
  E: []
};

const sorted = topologicalSort(graph);
console.log(sorted); // ["A", "C", "E", "B", "D"]
