function bellmanFord(graph, source) {
  const vertices = Object.keys(graph);
  const distance = {};
  const prev = {};
  let hasNegativeCycle = false;

  // Step 1: Initialize distances
  for (let i = 0; i < vertices.length; i++) {
    distance[vertices[i]] = Infinity;
  }
  distance[source] = 0;

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < vertices.length - 1; i++) {
    let changes = false;

    for (let j = 0; j < vertices.length; j++) {
      const u = vertices[j];

      for (const v in graph[u]) {
        const weight = graph[u][v];
        if (distance[u] + weight < distance[v]) {
          distance[v] = distance[u] + weight;
          prev[v] = u;
          changes = true;
        }
      }
    }

    // Optimization: If no changes are made in an iteration, break the loop
    if (!changes) {
      break;
    }
  }

  // Step 3: Check for negative weight cycles
  for (let i = 0; i < vertices.length; i++) {
    const u = vertices[i];
    for (const v in graph[u]) {
      const weight = graph[u][v];
      if (distance[u] + weight < distance[v]) {
        hasNegativeCycle = true;
        break;
      }
    }
  }

  // Step 4: Build the shortest path
  function buildPath(destination) {
    const path = [destination];
    let vertex = destination;

    while (prev[vertex] !== undefined) {
      vertex = prev[vertex];
      path.unshift(vertex);
    }

    return path;
  }

  return { distance, hasNegativeCycle, buildPath };
}

// Example usage:
const graph = {
  A: { B: 4, C: 2 },
  B: { D: 5 },
  C: { B: -1, D: 1 },
  D: {},
};
const source = "A";

const { distance, hasNegativeCycle, buildPath } = bellmanFord(graph, source);
console.log("Distance:", distance);
console.log("Negative Cycle:", hasNegativeCycle);
console.log("Shortest Path (A -> D):", buildPath("D"));
