type Graph = { [key: string]: string[] }; // Adjacency list representation of the graph

function bidirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    if (start === goal) return [start];

    const forwardQueue: string[] = [start];
    const backwardQueue: string[] = [goal];
    
    const forwardVisited: Set<string> = new Set();
    const backwardVisited: Set<string> = new Set();
    
    const forwardParents: { [key: string]: string } = {};
    const backwardParents: { [key: string]: string } = {};
    
    forwardVisited.add(start);
    backwardVisited.add(goal);
    
    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        // Expand in the forward direction
        let forwardNode = forwardQueue.shift();
        if (!forwardNode) return null;

        for (let neighbor of graph[forwardNode] || []) {
            if (backwardVisited.has(neighbor)) {
                return reconstructPath(forwardParents, backwardParents, start, neighbor, goal);
            }
            if (!forwardVisited.has(neighbor)) {
                forwardVisited.add(neighbor);
                forwardParents[neighbor] = forwardNode;
                forwardQueue.push(neighbor);
            }
        }

        // Expand in the backward direction
        let backwardNode = backwardQueue.shift();
        if (!backwardNode) return null;

        for (let neighbor of graph[backwardNode] || []) {
            if (forwardVisited.has(neighbor)) {
                return reconstructPath(forwardParents, backwardParents, start, neighbor, goal);
            }
            if (!backwardVisited.has(neighbor)) {
                backwardVisited.add(neighbor);
                backwardParents[neighbor] = backwardNode;
                backwardQueue.push(neighbor);
            }
        }
    }

    return null; // No path found
}

function reconstructPath(forwardParents: { [key: string]: string }, backwardParents: { [key: string]: string }, start: string, meet: string, goal: string): string[] {
    const path = [];
    let currentNode = meet;

    // Build path from start to the meeting point
    while (currentNode !== start) {
        path.push(currentNode);
        currentNode = forwardParents[currentNode];
    }
    path.push(start);
    path.reverse();

    // Build path from meeting point to goal
    currentNode = backwardParents[meet];
    while (currentNode !== goal) {
        path.push(currentNode);
        currentNode = backwardParents[currentNode];
    }
    path.push(goal);
    
    return path;
}

// Example usage:
const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E', 'G'],
    G: ['F']
};

const path = bidirectionalSearch(graph, 'A', 'G');
console.log(path); // Output: ['A', 'B', 'E', 'F', 'G'] or another valid path
