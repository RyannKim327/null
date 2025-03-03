interface Node {
    id: string;
    neighbors: Node[];
}

function biDirectionalSearch(start: Node, goal: Node): Node[] | null {
    if (start === goal) return [start];

    // Queues for forward and backward searches
    const forwardQueue: Node[] = [start];
    const backwardQueue: Node[] = [goal];

    // Sets for visited nodes
    const visitedFromStart = new Set<Node>();
    const visitedFromGoal = new Set<Node>();

    // Maps to find paths
    const parentFromStart = new Map<Node, Node>();
    const parentFromGoal = new Map<Node, Node>();

    visitedFromStart.add(start);
    visitedFromGoal.add(goal);

    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        // Expand from start side
        const forwardNode = forwardQueue.shift();
        if (forwardNode) {
            for (const neighbor of forwardNode.neighbors) {
                if (visitedFromGoal.has(neighbor)) {
                    return reconstructPath(neighbor, parentFromStart, parentFromGoal);
                }

                if (!visitedFromStart.has(neighbor)) {
                    visitedFromStart.add(neighbor);
                    parentFromStart.set(neighbor, forwardNode);
                    forwardQueue.push(neighbor);
                }
            }
        }

        // Expand from goal side
        const backwardNode = backwardQueue.shift();
        if (backwardNode) {
            for (const neighbor of backwardNode.neighbors) {
                if (visitedFromStart.has(neighbor)) {
                    return reconstructPath(neighbor, parentFromStart, parentFromGoal);
                }

                if (!visitedFromGoal.has(neighbor)) {
                    visitedFromGoal.add(neighbor);
                    parentFromGoal.set(neighbor, backwardNode);
                    backwardQueue.push(neighbor);
                }
            }
        }
    }

    return null; // No path found
}

function reconstructPath(meetingNode: Node, parentFromStart: Map<Node, Node>, parentFromGoal: Map<Node, Node>): Node[] {
    const pathFromStart = [];
    let currentNode: Node | undefined = meetingNode;

    // Trace back from the meeting node to the start
    while (currentNode) {
        pathFromStart.push(currentNode);
        currentNode = parentFromStart.get(currentNode);
    }
    pathFromStart.reverse();

    currentNode = parentFromGoal.get(meetingNode);

    // Trace back from the meeting node to the goal
    const pathFromGoal = [];
    while (currentNode) {
        pathFromGoal.push(currentNode);
        currentNode = parentFromGoal.get(currentNode);
    }

    // Combine paths
    return pathFromStart.concat(pathFromGoal);
}

// Example Usage:
const nodes: { [key: string]: Node } = {
    a: { id: "a", neighbors: [] },
    b: { id: "b", neighbors: [] },
    c: { id: "c", neighbors: [] },
    // Add more nodes and their neighbors as necessary
};

// Set up neighbors for each node
nodes.a.neighbors.push(nodes.b);
nodes.b.neighbors.push(nodes.c);
nodes.c.neighbors.push(nodes.a); // e.g., creates a cycle

const path = biDirectionalSearch(nodes.a, nodes.c);
console.log(path);
