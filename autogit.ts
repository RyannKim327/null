interface GraphNode {
  id: string;
  edges: { [targetId: string]: number };
}

class Dijkstra {
  // Graph represented as a map of nodes
  private graph: Map<string, GraphNode>;

  constructor(graph: Map<string, GraphNode>) {
    this.graph = graph;
  }

  // Find shortest path between start and end nodes
  findShortestPath(startNodeId: string, endNodeId: string): {
    path: string[],
    distance: number
  } {
    // Distances to each node
    const distances = new Map<string, number>();
    // Previous nodes in optimal path
    const previousNodes = new Map<string, string | null>();
    // Unvisited nodes
    const unvisitedNodes = new Set(this.graph.keys());

    // Initialize distances
    for (const nodeId of this.graph.keys()) {
      distances.set(nodeId, nodeId === startNodeId ? 0 : Infinity);
      previousNodes.set(nodeId, null);
    }

    while (unvisitedNodes.size > 0) {
      // Find unvisited node with smallest distance
      const currentNodeId = this.findNodeWithMinDistance(distances, unvisitedNodes);
      
      if (!currentNodeId || currentNodeId === endNodeId) break;

      unvisitedNodes.delete(currentNodeId);
      const currentNode = this.graph.get(currentNodeId)!;

      // Check all neighboring nodes
      for (const [neighborId, edgeWeight] of Object.entries(currentNode.edges)) {
        if (!unvisitedNodes.has(neighborId)) continue;

        const tentativeDistance = 
          (distances.get(currentNodeId) ?? Infinity) + edgeWeight;

        if (tentativeDistance < (distances.get(neighborId) ?? Infinity)) {
          distances.set(neighborId, tentativeDistance);
          previousNodes.set(neighborId, currentNodeId);
        }
      }
    }

    // Reconstruct path
    return {
      path: this.reconstructPath(previousNodes, startNodeId, endNodeId),
      distance: distances.get(endNodeId) ?? Infinity
    };
  }

  // Helper to find node with minimum distance
  private findNodeWithMinDistance(
    distances: Map<string, number>, 
    unvisitedNodes: Set<string>
  ): string | null {
    let minDistance = Infinity;
    let minNodeId: string | null = null;

    for (const nodeId of unvisitedNodes) {
      const distance = distances.get(nodeId) ?? Infinity;
      if (distance < minDistance) {
        minDistance = distance;
        minNodeId = nodeId;
      }
    }

    return minNodeId;
  }

  // Reconstruct the path from start to end
  private reconstructPath(
    previousNodes: Map<string, string | null>, 
    startNodeId: string, 
    endNodeId: string
  ): string[] {
    const path: string[] = [];
    let currentNodeId: string | null = endNodeId;

    while (currentNodeId) {
      path.unshift(currentNodeId);
      currentNodeId = previousNodes.get(currentNodeId) ?? null;
      
      if (currentNodeId === startNodeId) {
        path.unshift(startNodeId);
        break;
      }
    }

    return path;
  }
}

// Example usage
function main() {
  // Create a sample graph
  const graph = new Map<string, GraphNode>([
    ['A', { id: 'A', edges: { 'B': 4, 'C': 2 } }],
    ['B', { id: 'B', edges: { 'D': 3 } }],
    ['C', { id: 'C', edges: { 'B': 1, 'D': 5 } }],
    ['D', { id: 'D', edges: {} })
  ]);

  const dijkstra = new Dijkstra(graph);
  const result = dijkstra.findShortestPath('A', 'D');
  
  console.log('Shortest Path:', result.path);
  console.log('Total Distance:', result.distance);
}

main();
