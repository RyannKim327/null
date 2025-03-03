class Graph {
    private adjacencyList: Map<string, string[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addEdge(vertex1: string, vertex2: string) {
        if (!this.adjacencyList.has(vertex1)) {
            this.adjacencyList.set(vertex1, []);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(vertex2, []);
        }
        this.adjacencyList.get(vertex1)!.push(vertex2);
        this.adjacencyList.get(vertex2)!.push(vertex1); // For undirected graph
    }

    getNeighbors(vertex: string): string[] {
        return this.adjacencyList.get(vertex) || [];
    }

    getVertices(): string[] {
        return Array.from(this.adjacencyList.keys());
    }
}
function biDirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    if (start === goal) return [start];

    const visitedFromStart = new Set<string>();
    const visitedFromGoal = new Set<string>();
    const queueFromStart: string[] = [start];
    const queueFromGoal: string[] = [goal];
    const parentFromStart: Map<string, string | null> = new Map();
    const parentFromGoal: Map<string, string | null> = new Map();

    parentFromStart.set(start, null);
    parentFromGoal.set(goal, null);

    while (queueFromStart.length > 0 && queueFromGoal.length > 0) {
        // Search from the start
        const currentFromStart = queueFromStart.shift()!;
        if (visitedFromGoal.has(currentFromStart)) {
            return constructPath(currentFromStart, parentFromStart, parentFromGoal);
        }
        visitedFromStart.add(currentFromStart);

        for (const neighbor of graph.getNeighbors(currentFromStart)) {
            if (!visitedFromStart.has(neighbor)) {
                queueFromStart.push(neighbor);
                visitedFromStart.add(neighbor);
                parentFromStart.set(neighbor, currentFromStart);
            }
        }

        // Search from the goal
        const currentFromGoal = queueFromGoal.shift()!;
        if (visitedFromStart.has(currentFromGoal)) {
            return constructPath(currentFromGoal, parentFromGoal, parentFromStart);
        }
        visitedFromGoal.add(currentFromGoal);

        for (const neighbor of graph.getNeighbors(currentFromGoal)) {
            if (!visitedFromGoal.has(neighbor)) {
                queueFromGoal.push(neighbor);
                visitedFromGoal.add(neighbor);
                parentFromGoal.set(neighbor, currentFromGoal);
            }
        }
    }

    return null; // No path found
}

function constructPath(meetingPoint: string, parentFromStart: Map<string, string | null>, parentFromGoal: Map<string, string | null>): string[] {
    const path: string[] = [];
    let current: string | null = meetingPoint;

    // Construct path from start to meeting point
    while (current !== null) {
        path.push(current);
        current = parentFromStart.get(current) || null;
    }
    path.reverse();

    // Construct path from meeting point to goal
    current = parentFromGoal.get(meetingPoint) || null;
    while (current !== null) {
        path.push(current);
        current = parentFromGoal.get(current) || null;
    }

    return path;
}
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "F");

const path = biDirectionalSearch(graph, "A", "F");
console.log(path); // Output: ['A', 'B', 'D', 'E', 'F'] or similar
