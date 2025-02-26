class Graph {
    private adjList: Map<string, string[]>;

    constructor() {
        this.adjList = new Map();
    }

    addEdge(vertex1: string, vertex2: string) {
        if (!this.adjList.has(vertex1)) {
            this.adjList.set(vertex1, []);
        }
        if (!this.adjList.has(vertex2)) {
            this.adjList.set(vertex2, []);
        }
        this.adjList.get(vertex1)!.push(vertex2);
        this.adjList.get(vertex2)!.push(vertex1);
    }

    biDirectionalSearch(start: string, goal: string): string[] | null {
        if (start === goal) return [start];

        let forwardQueue: string[] = [start];
        let backwardQueue: string[] = [goal];

        let exploredFromStart = new Set<string>();
        let exploredFromGoal = new Set<string>();
        let parentsForward = new Map<string, string>();
        let parentsBackward = new Map<string, string>();

        exploredFromStart.add(start);
        exploredFromGoal.add(goal);

        while (forwardQueue.length > 0 && backwardQueue.length > 0) {
            // Forward search
            let currentForward = forwardQueue.shift()!;
            let neighborsForward = this.adjList.get(currentForward) || [];

            for (let neighbor of neighborsForward) {
                if (!exploredFromStart.has(neighbor)) {
                    exploredFromStart.add(neighbor);
                    parentsForward.set(neighbor, currentForward);
                    forwardQueue.push(neighbor);

                    // Check if the node is in the backward explored set
                    if (exploredFromGoal.has(neighbor)) {
                        return this.constructPath(neighbor, parentsForward, parentsBackward);
                    }
                }
            }

            // Backward search
            let currentBackward = backwardQueue.shift()!;
            let neighborsBackward = this.adjList.get(currentBackward) || [];

            for (let neighbor of neighborsBackward) {
                if (!exploredFromGoal.has(neighbor)) {
                    exploredFromGoal.add(neighbor);
                    parentsBackward.set(neighbor, currentBackward);
                    backwardQueue.push(neighbor);

                    // Check if the node is in the forward explored set
                    if (exploredFromStart.has(neighbor)) {
                        return this.constructPath(neighbor, parentsForward, parentsBackward);
                    }
                }
            }
        }
        return null; // No path found
    }

    private constructPath(meetingPoint: string, 
                          parentsForward: Map<string, string>, 
                          parentsBackward: Map<string, string>): string[] {
        let path = [];
        let step = meetingPoint;

        // Construct path from start to meeting point
        while (step) {
            path.push(step);
            step = parentsForward.get(step) || '';
        }
        path.reverse();

        // Construct path from meeting point to goal
        step = parentsBackward.get(meetingPoint) || '';
        while (step) {
            path.push(step);
            step = parentsBackward.get(step) || '';
        }

        return path;
    }
}

// Example usage
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

const path = graph.biDirectionalSearch("A", "E");
console.log(path);
