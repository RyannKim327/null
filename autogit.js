function dijkstra(graph, startNode) {
  // ...
}
function dijkstra(graph, startNode) {
  const distance = {};
  const visited = {};

  // ...
}
function dijkstra(graph, startNode) {
  const distance = {};
  const visited = {};

  // Set initial distance of the startNode to 0, and all others to infinity
  for (let node in graph) {
    distance[node] = Infinity;
  }
  distance[startNode] = 0;

  // ...
}
function dijkstra(graph, startNode) {
  const distance = {};
  const visited = {};

  // Set initial distance of the startNode to 0, and all others to infinity
  for (let node in graph) {
    distance[node] = Infinity;
  }
  distance[startNode] = 0;

  while (true) {
    let shortestDistanceNode = null;

    // Find the node with the shortest distance that hasn't been visited
    for (let node in graph) {
      if (!visited[node] && (shortestDistanceNode === null || distance[node] < distance[shortestDistanceNode])) {
        shortestDistanceNode = node;
      }
    }

    // ...
  }
}
function dijkstra(graph, startNode) {
  const distance = {};
  const visited = {};

  // Set initial distance of the startNode to 0, and all others to infinity
  for (let node in graph) {
    distance[node] = Infinity;
  }
  distance[startNode] = 0;

  while (true) {
    let shortestDistanceNode = null;

    // Find the node with the shortest distance that hasn't been visited
    for (let node in graph) {
      if (!visited[node] && (shortestDistanceNode === null || distance[node] < distance[shortestDistanceNode])) {
        shortestDistanceNode = node;
      }
    }

    // If all nodes have been visited, break out of the loop
    if (shortestDistanceNode === null) {
      break;
    }

    // ...
  }
}
function dijkstra(graph, startNode) {
  const distance = {};
  const visited = {};

  // Set initial distance of the startNode to 0, and all others to infinity
  for (let node in graph) {
    distance[node] = Infinity;
  }
  distance[startNode] = 0;

  while (true) {
    let shortestDistanceNode = null;

    // Find the node with the shortest distance that hasn't been visited
    for (let node in graph) {
      if (!visited[node] && (shortestDistanceNode === null || distance[node] < distance[shortestDistanceNode])) {
        shortestDistanceNode = node;
      }
    }

    // If all nodes have been visited, break out of the loop
    if (shortestDistanceNode === null) {
      break;
    }

    // Mark the current node as visited
    visited[shortestDistanceNode] = true;

    let neighbors = graph[shortestDistanceNode];

    // Iterate through the neighbors of the current node
    for (let neighbor in neighbors) {
      let newDistance = distance[shortestDistanceNode] + neighbors[neighbor];

      // If the new distance is shorter than the previously recorded distance, update it
      if (newDistance < distance[neighbor]) {
        distance[neighbor] = newDistance;
      }
    }
  }

  // ...
}
function dijkstra(graph, startNode) {
  const distance = {};
  const visited = {};

  // Set initial distance of the startNode to 0, and all others to infinity
  for (let node in graph) {
    distance[node] = Infinity;
  }
  distance[startNode] = 0;

  while (true) {
    let shortestDistanceNode = null;

    // Find the node with the shortest distance that hasn't been visited
    for (let node in graph) {
      if (!visited[node] && (shortestDistanceNode === null || distance[node] < distance[shortestDistanceNode])) {
        shortestDistanceNode = node;
      }
    }

    // If all nodes have been visited, break out of the loop
    if (shortestDistanceNode === null) {
      break;
    }

    // Mark the current node as visited
    visited[shortestDistanceNode] = true;

    let neighbors = graph[shortestDistanceNode];

    // Iterate through the neighbors of the current node
    for (let neighbor in neighbors) {
      let newDistance = distance[shortestDistanceNode] + neighbors[neighbor];

      // If the new distance is shorter than the previously recorded distance, update it
      if (newDistance < distance[neighbor]) {
        distance[neighbor] = newDistance;
      }
    }
  }

  return distance;
}
