class Graph {
    adjacencyList: { [key: string]: string[] };

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1: string, vertex2: string) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // Uncomment for an undirected graph
    }

    bfs(start: string): string[] {
        const queue: string[] = [start];
        const visited: Set<string> = new Set([start]);
        const result: string[] = [];

        while (queue.length) {
            const currentVertex = queue.shift()!;
            result.push(currentVertex);

            for (const neighbor of this.adjacencyList[currentVertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}

// Example Usage
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

const bfsResult = graph.bfs('A');
console.log(bfsResult); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
