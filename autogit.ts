type Graph = Map<string, Map<string, number>>;

function dijkstra(graph: Graph, start: string): Map<string, number> {
  const distances = new Map<string, number>();
  const visited = new Set<string>();
  const pq: Array<{ node: string; dist: number }> = [];

  // Initialize distances
  for (const node of graph.keys()) {
    distances.set(node, Infinity);
  }
  distances.set(start, 0);

  // Simple priority queue push function (not optimal but fine for basic use)
  function enqueue(node: string, dist: number) {
    pq.push({ node, dist });
    pq.sort((a, b) => a.dist - b.dist);
  }

  enqueue(start, 0);

  while (pq.length > 0) {
    const { node: currentNode, dist: currentDist } = pq.shift()!;

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    const neighbors = graph.get(currentNode);
    if (!neighbors) continue;

    for (const [neighbor, weight] of neighbors) {
      if (visited.has(neighbor)) continue;

      const newDist = currentDist + weight;
      if (newDist < (distances.get(neighbor) ?? Infinity)) {
        distances.set(neighbor, newDist);
        enqueue(neighbor, newDist);
      }
    }
  }

  return distances;
}
const graph: Graph = new Map([
  ["A", new Map([["B", 1], ["C", 4]])],
  ["B", new Map([["A", 1], ["C", 2], ["D", 5]])],
  ["C", new Map([["A", 4], ["B", 2], ["D", 1]])],
  ["D", new Map([["B", 5], ["C", 1]])]
]);

const distances = dijkstra(graph, "A");
console.log(distances);  // Map { 'A' => 0, 'B' => 1, 'C' => 3, 'D' => 4 }
