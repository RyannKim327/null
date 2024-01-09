const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C", "E"],
  E: ["D"]
};
const queue = [];
function breadthFirstSearch(graph, startNode) {
  const visited = new Set(); // to keep track of visited nodes
  queue.push(startNode);

  while (queue.length > 0) {
    const node = queue.shift(); // dequeue the first node

    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);

      const neighbors = graph[node];
      for (let neighbor of neighbors) {
        queue.push(neighbor); // enqueue the neighbors
      }
    }
  }
}
breadthFirstSearch(graph, "A");
