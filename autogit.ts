interface Node {
    id: string; // Unique identifier for the node
    x: number;  // X-coordinate for heuristic calculation
    y: number;  // Y-coordinate for heuristic calculation
}

interface Edge {
    from: Node;
    to: Node;
    cost: number; // Cost to move to this edge
}

interface PathNode {
    node: Node;
    parent?: PathNode; // Reference to previous node in the path
    g: number; // Cost from start node
    h: number; // Heuristic cost
    f: number; // Total cost (g + h)
}
function heuristic(nodeA: Node, nodeB: Node): number {
    // Using Manhattan distance as a heuristic
    return Math.abs(nodeA.x - nodeB.x) + Math.abs(nodeA.y - nodeB.y);
}

function aStar(start: Node, goal: Node, edges: Edge[]): Node[] {
    const openSet: PathNode[] = [];
    const closedSet: Set<string> = new Set();

    const startNode: PathNode = { node: start, g: 0, h: heuristic(start, goal), f: heuristic(start, goal) };
    openSet.push(startNode);

    while (openSet.length > 0) {
        // Sort openSet by f value and take the lowest
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift()!;

        // Check if we reached the goal
        if (current.node.id === goal.id) {
            const path: Node[] = [];
            let temp: PathNode | undefined = current;
            while (temp) {
                path.push(temp.node);
                temp = temp.parent;
            }
            return path.reverse(); // Reverse to get the correct order from start to goal
        }

        closedSet.add(current.node.id);

        // Iterate through edges to find neighbors
        for (const edge of edges) {
            if (edge.from.id === current.node.id) {
                const neighbor = edge.to;

                if (closedSet.has(neighbor.id)) {
                    continue; // Ignore the neighbor which is already evaluated
                }

                const gScore = current.g + edge.cost;
                const hScore = heuristic(neighbor, goal);
                const fScore = gScore + hScore;

                const existingNode = openSet.find(n => n.node.id === neighbor.id);
                if (!existingNode) {
                    // New node found
                    openSet.push({ node: neighbor, parent: current, g: gScore, h: hScore, f: fScore });
                } else if (gScore < existingNode.g) {
                    // Update the scores if the new path is better
                    existingNode.g = gScore;
                    existingNode.f = fScore;
                    existingNode.parent = current; // Update parent to current
                }
            }
        }
    }

    return []; // Return an empty array if no path was found
}
const nodes: Node[] = [
    { id: 'A', x: 0, y: 0 },
    { id: 'B', x: 1, y: 0 },
    { id: 'C', x: 1, y: 1 },
    { id: 'D', x: 0, y: 1 },
];

const edges: Edge[] = [
    { from: nodes[0], to: nodes[1], cost: 1 },
    { from: nodes[1], to: nodes[2], cost: 1 },
    { from: nodes[2], to: nodes[3], cost: 1 },
    { from: nodes[3], to: nodes[0], cost: 1 },
    { from: nodes[1], to: nodes[3], cost: 1.5 },
];

const startNode = nodes[0];
const goalNode = nodes[2];
const path = aStar(startNode, goalNode, edges);

console.log('Path from start to goal:', path.map(n => n.id));
