type Graph = {
    [key: string]: { node: string, weight: number }[];
};

type DistanceMap = {
    [key: string]: number;
};
function dijkstra(graph: Graph, start: string): DistanceMap {
    const distances: DistanceMap = {};
    const visited: Set<string> = new Set();
    const priorityQueue: [string, number][] = []; // [node, distance]

    // Initialize distances for all nodes
    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;

    // Push the start node to the priority queue
    priorityQueue.push([start, 0]);

    while (priorityQueue.length > 0) {
        // Sort the priority queue by distance and pop the smallest element
        priorityQueue.sort((a, b) => a[1] - b[1]);
        const [currentNode, currentDistance] = priorityQueue.shift()!;

        if (visited.has(currentNode)) {
            continue; // Skip if the node has been visited
        }
        visited.add(currentNode);

        // Explore neighbors
        for (const neighbor of graph[currentNode]) {
            const distance = currentDistance + neighbor.weight;

            // Only consider this new path if it's better
            if (distance < distances[neighbor.node]) {
                distances[neighbor.node] = distance;
                priorityQueue.push([neighbor.node, distance]);
            }
        }
    }

    return distances;
}
const graph: Graph = {
    A: [{ node: "B", weight: 1 }, { node: "C", weight: 4 }],
    B: [{ node: "A", weight: 1 }, { node: "C", weight: 2 }, { node: "D", weight: 5 }],
    C: [{ node: "A", weight: 4 }, { node: "B", weight: 2 }, { node: "D", weight: 1 }],
    D: [{ node: "B", weight: 5 }, { node: "C", weight: 1 }],
};

const distancesFromA = dijkstra(graph, "A");
console.log(distancesFromA);
// Output: { A: 0, B: 1, C: 3, D: 4 }
