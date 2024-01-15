function breadthFirstSearch(graph, startNode) {
  // Step 1: Initialize an empty queue and an empty visited set
  const queue = [];
  const visited = new Set();

  // Step 2: Enqueue the startNode
  queue.push(startNode);

  // Step 3: Loop until the queue is empty
  while (queue.length > 0) {
    // Step 4: Dequeue a node from the front of the queue
    const currentNode = queue.shift();

    // Step 5: If the node has not been visited, mark it as visited and process it
    if (!visited.has(currentNode)) {
      visited.add(currentNode);

      // Process the node (e.g., print it)
      console.log(currentNode);

      // Step 6: Enqueue all adjacent nodes of the current node that have not been visited
      const adjacentNodes = graph[currentNode];
      for (let i = 0; i < adjacentNodes.length; i++) {
        const adjacentNode = adjacentNodes[i];
        if (!visited.has(adjacentNode)) {
          queue.push(adjacentNode);
        }
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
