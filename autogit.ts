type Graph = Record<string, string[]>;

function biDirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
  if (start === goal) return [start];

  // Queues for forward and backward search
  let forwardQueue: string[] = [start];
  let backwardQueue: string[] = [goal];

  // Visited maps store (node => parent)
  let forwardVisited = new Map<string, string | null>([[start, null]]);
  let backwardVisited = new Map<string, string | null>([[goal, null]]);

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Expand forward
    const forwardNode = forwardQueue.shift()!;
    for (const neighbor of graph[forwardNode] || []) {
      if (!forwardVisited.has(neighbor)) {
        forwardVisited.set(neighbor, forwardNode);
        forwardQueue.push(neighbor);

        if (backwardVisited.has(neighbor)) {
          // Path meets here, reconstruct path
          return reconstructPath(neighbor, forwardVisited, backwardVisited);
        }
      }
    }

    // Expand backward
    const backwardNode = backwardQueue.shift()!;
    for (const neighbor of graph[backwardNode] || []) {
      if (!backwardVisited.has(neighbor)) {
        backwardVisited.set(neighbor, backwardNode);
        backwardQueue.push(neighbor);

        if (forwardVisited.has(neighbor)) {
          // Path meets here, reconstruct path
          return reconstructPath(neighbor, forwardVisited, backwardVisited);
        }
      }
    }
  }

  // No path found
  return null;
}

// Helper to reconstruct path from parent maps
function reconstructPath(
  meetingNode: string,
  forwardVisited: Map<string, string | null>,
  backwardVisited: Map<string, string | null>
): string[] {
  const path: string[] = [];

  // Backtrace from meeting node to start
  let current: string | null = meetingNode;
  while (current !== null) {
    path.unshift(current);
    current = forwardVisited.get(current) || null;
  }

  // Backtrace from meeting node to goal (skipping meeting node itself to not duplicate)
  current = backwardVisited.get(meetingNode) || null;
  while (current !== null) {
    path.push(current);
    current = backwardVisited.get(current) || null;
  }

  return path;
}
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

const path = biDirectionalSearch(graph, 'A', 'F');
console.log(path); // Might print ['A', 'C', 'F']
