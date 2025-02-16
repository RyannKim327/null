interface Node {
    id: string; // Unique identifier for the node
    g: number; // Cost from start node to current node
    h: number; // Heuristic cost from current node to goal node
    f: number; // Total cost (g + h)
    parent?: Node; // Parent node in the search path
}
function heuristic(node: Node, goal: Node): number {
    // Example: Use Manhattan distance or Euclidean distance depending on your use case
    return Math.abs(Number(node.id) - Number(goal.id)); // Adjust accordingly
}

function aStarSearch(start: Node, goal: Node, getNeighbors: (node: Node) => Node[]): Node | null {
    const openSet: Node[] = [start];
    const closedSet: Node[] = [];

    while (openSet.length > 0) {
        // Get node with the lowest f value
        openSet.sort((a, b) => a.f - b.f);
        const currentNode = openSet.shift()!;

        // Check if we reached the goal
        if (currentNode.id === goal.id) {
            return currentNode; // Goal found
        }

        closedSet.push(currentNode);

        // Explore neighbors
        const neighbors = getNeighbors(currentNode);
        for (const neighbor of neighbors) {
            if (closedSet.some(node => node.id === neighbor.id)) {
                continue; // Already evaluated
            }

            const tentativeG = currentNode.g + 1; // Assuming uniform cost for simplicity

            if (!openSet.some(node => node.id === neighbor.id)) {
                openSet.push(neighbor); // New node discovered
            } else if (tentativeG >= neighbor.g) {
                continue; // Not a better path
            }

            // Update costs
            neighbor.g = tentativeG;
            neighbor.h = heuristic(neighbor, goal);
            neighbor.f = neighbor.g + neighbor.h;
            neighbor.parent = currentNode; // Set current as parent
        }
    }

    return null; // No path found
}
function getNeighbors(node: Node): Node[] {
    // Example implementation: return neighbors based on your specific use case
    const neighbors: Node[] = [];
    // Add logic to get actual neighboring nodes
    return neighbors;
}
const start: Node = { id: '0', g: 0, h: 0, f: 0 };
const goal: Node = { id: '10', g: Infinity, h: 0, f: Infinity };

const result = aStarSearch(start, goal, getNeighbors);

if (result) {
    console.log('Path found:', result);
} else {
    console.log('No path found.');
}
