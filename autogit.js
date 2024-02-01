function breadthFirstSearch(graph, startNode) {
  let queue = [startNode];
  let visited = [];

  visited[startNode] = true;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode); // Process the dequeued node (e.g., print its value)

    const neighbors = graph[currentNode];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }
}
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

breadthFirstSearch(graph, "A");
