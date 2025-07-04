interface Graph {
    [key: string]: string[];
}

const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};
function bidirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    if (!(start in graph) || !(goal in graph)) {
        return null; // Start or goal node doesn't exist
    }

    // Initialize the forward and backward search
    const forwardQueue: string[] = [start];
    const backwardQueue: string[] = [goal];
    const forwardVisited: Set<string> = new Set([start]);
    const backwardVisited: Set<string> = new Set([goal]);
    const forwardParents: { [key: string]: string } = {};
    const backwardParents: { [key: string]: string } = {};

    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        // One step forward search
        if (expandSearch(graph, forwardQueue, forwardVisited, forwardParents, backwardVisited)) {
            return constructPath(forwardParents, backwardParents, start, goal);
        }

        // One step backward search
        if (expandSearch(graph, backwardQueue, backwardVisited, backwardParents, forwardVisited)) {
            return constructPath(backwardParents, forwardParents, goal, start);
        }
    }

    return null; // No path found
}

function expandSearch(
    graph: Graph, 
    queue: string[], 
    visited: Set<string>, 
    parents: { [key: string]: string }, 
    otherVisited: Set<string>
): boolean {
    const currentNode = queue.shift();
    if (!currentNode) return false;

    for (const neighbor of graph[currentNode]) {
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            parents[neighbor] = currentNode;
            queue.push(neighbor);

            if (otherVisited.has(neighbor)) {
                return true; // A connection has been found
            }
        }
    }
    return false;
}

function constructPath(
    parentsA: { [key: string]: string }, 
    parentsB: { [key: string]: string }, 
    start: string, 
    goal: string
): string[] {
    const pathToGoal: string[] = [];
    let current = start;

    while (current) {
        pathToGoal.push(current);
        current = parentsA[current];
    }
    pathToGoal.reverse();

    current = goal;
    while (current) {
        pathToGoal.push(current);
        current = parentsB[current];
    }

    return pathToGoal; // Complete path from start to goal
}

// Example usage
const path = bidirectionalSearch(graph, 'A', 'F');
console.log(path); // Output the shortest path
