interface Graph {
    [key: string]: string[];
}

function bidirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    if (start === goal) return [start];

    const queueStart: string[] = [start];
    const queueGoal: string[] = [goal];
    const visitedFromStart: Set<string> = new Set([start]);
    const visitedFromGoal: Set<string> = new Set([goal]);
    const parentsStart: { [key: string]: string | null } = { [start]: null };
    const parentsGoal: { [key: string]: string | null } = { [goal]: null };

    while (queueStart.length > 0 && queueGoal.length > 0) {
        // Step from the start
        const currentStart = queueStart.shift();
        if (currentStart && visitedFromGoal.has(currentStart)) {
            return reconstructPath(currentStart, parentsStart, parentsGoal);
        }
        if (currentStart) {
            for (const neighbor of graph[currentStart] || []) {
                if (!visitedFromStart.has(neighbor)) {
                    visitedFromStart.add(neighbor);
                    parentsStart[neighbor] = currentStart;
                    queueStart.push(neighbor);
                }
            }
        }

        // Step from the goal
        const currentGoal = queueGoal.shift();
        if (currentGoal && visitedFromStart.has(currentGoal)) {
            return reconstructPath(currentGoal, parentsGoal, parentsStart);
        }
        if (currentGoal) {
            for (const neighbor of graph[currentGoal] || []) {
                if (!visitedFromGoal.has(neighbor)) {
                    visitedFromGoal.add(neighbor);
                    parentsGoal[neighbor] = currentGoal;
                    queueGoal.push(neighbor);
                }
            }
        }
    }

    return null; // If no path is found
}

function reconstructPath(meetingNode: string, parentsFromStart: { [key: string]: string | null}, parentsFromGoal: { [key: string]: string | null}) {
    const pathStart: string[] = [];
    for (let at = meetingNode; at !== null; at = parentsFromStart[at]) {
        pathStart.push(at);
    }
    pathStart.reverse();

    const pathGoal: string[] = [];
    for (let at = meetingNode; at !== null; at = parentsFromGoal[at]) {
        pathGoal.push(at);
    }

    pathGoal.reverse(); // Reverse the goal path
    pathGoal.shift(); // Remove the meeting node from one path

    return pathStart.concat(pathGoal); // Combine both paths
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

console.log(bidirectionalSearch(graph, 'A', 'F')); // Should print the path from A to F
