type Node = {
    value: string;
    neighbors: Node[];
};

function biDirectionalSearch(start: Node, goal: Node): Node[] | null {
    if (start === goal) return [start];

    const startQueue: Node[] = [start];
    const goalQueue: Node[] = [goal];
    const startVisited = new Set<Node>();
    const goalVisited = new Set<Node>();
    const startParentMap = new Map<Node, Node>();
    const goalParentMap = new Map<Node, Node>();

    startVisited.add(start);
    goalVisited.add(goal);

    while (startQueue.length > 0 && goalQueue.length > 0) {
        // Expand from the start
        const startNode = startQueue.shift()!;
        for (const neighbor of startNode.neighbors) {
            if (!startVisited.has(neighbor)) {
                startVisited.add(neighbor);
                startParentMap.set(neighbor, startNode);
                startQueue.push(neighbor);

                // Check if this node has been visited from the goal side
                if (goalVisited.has(neighbor)) {
                    return reconstructPath(neighbor, startParentMap, goalParentMap);
                }
            }
        }

        // Expand from the goal
        const goalNode = goalQueue.shift()!;
        for (const neighbor of goalNode.neighbors) {
            if (!goalVisited.has(neighbor)) {
                goalVisited.add(neighbor);
                goalParentMap.set(neighbor, goalNode);
                goalQueue.push(neighbor);

                // Check if this node has been visited from the start side
                if (startVisited.has(neighbor)) {
                    return reconstructPath(neighbor, startParentMap, goalParentMap);
                }
            }
        }
    }

    return null; // No path found
}

function reconstructPath(meetingNode: Node, startParentMap: Map<Node, Node>, goalParentMap: Map<Node, Node>): Node[] {
    const path: Node[] = [];
    
    // Reconstruct path from start to meeting node
    let currentNode: Node | undefined = meetingNode;
    while (currentNode) {
        path.unshift(currentNode);
        currentNode = startParentMap.get(currentNode);
    }

    // Reconstruct path from meeting node to goal
    currentNode = goalParentMap.get(meetingNode);
    while (currentNode) {
        path.push(currentNode);
        currentNode = goalParentMap.get(currentNode);
    }

    return path;
}

// Example usage
const nodeA: Node = { value: 'A', neighbors: [] };
const nodeB: Node = { value: 'B', neighbors: [] };
const nodeC: Node = { value: 'C', neighbors: [] };
const nodeD: Node = { value: 'D', neighbors: [] };

nodeA.neighbors.push(nodeB, nodeC);
nodeB.neighbors.push(nodeD);
nodeC.neighbors.push(nodeD);

const path = biDirectionalSearch(nodeA, nodeD);
if (path) {
    console.log('Path found:', path.map(node => node.value));
} else {
    console.log('No path found');
}
