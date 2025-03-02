type Graph = {
    [key: string]: string[]; // Each node points to an array of its neighbors
};
function bidirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    // Edge cases
    if (start === goal) return [start];

    const queueStart = [start];
    const queueGoal = [goal];
    
    const visitedFromStart: { [key: string]: boolean } = { [start]: true };
    const visitedFromGoal: { [key: string]: boolean } = { [goal]: true };
    
    const parentFromStart: { [key: string]: string | null } = { [start]: null };
    const parentFromGoal: { [key: string]: string | null } = { [goal]: null };

    while (queueStart.length > 0 && queueGoal.length > 0) {
        // Search forward from start
        let nodeFromStart = queueStart.shift()!;
        let neighborsFromStart = graph[nodeFromStart];

        for (let neighbor of neighborsFromStart) {
            if (!visitedFromStart[neighbor]) {
                visitedFromStart[neighbor] = true;
                parentFromStart[neighbor] = nodeFromStart;
                queueStart.push(neighbor);

                // Check if the node is reached from the goal side
                if (visitedFromGoal[neighbor]) {
                    return constructPath(parentFromStart, parentFromGoal, neighbor);
                }
            }
        }

        // Search backward from goal
        let nodeFromGoal = queueGoal.shift()!;
        let neighborsFromGoal = graph[nodeFromGoal];

        for (let neighbor of neighborsFromGoal) {
            if (!visitedFromGoal[neighbor]) {
                visitedFromGoal[neighbor] = true;
                parentFromGoal[neighbor] = nodeFromGoal;
                queueGoal.push(neighbor);

                // Check if the node is reached from the start side
                if (visitedFromStart[neighbor]) {
                    return constructPath(parentFromStart, parentFromGoal, neighbor);
                }
            }
        }
    }

    return null; // No path found
}

function constructPath(
    parentFromStart: { [key: string]: string | null },
    parentFromGoal: { [key: string]: string | null },
    meetingPoint: string
): string[] {
    const path = [];
    
    // Trace path back from meeting point to start
    let currentNode: string | null = meetingPoint;
    while (currentNode !== null) {
        path.push(currentNode);
        currentNode = parentFromStart[currentNode];
    }
    
    // Reverse to go from start to meeting point
    path.reverse();

    // Trace path back from meeting point to goal
    currentNode = parentFromGoal[meetingPoint];
    while (currentNode !== null) {
        path.push(currentNode);
        currentNode = parentFromGoal[currentNode];
    }
    
    return path;
}
const graph: Graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

const start = 'A';
const goal = 'F';

const path = bidirectionalSearch(graph, start, goal);
console.log(path); // Example output: ["A", "C", "F"]
