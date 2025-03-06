class Graph {
    private adjacencyList: Map<string, string[]> = new Map();

    addVertex(vertex: string) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(v1: string, v2: string) {
        this.adjacencyList.get(v1)?.push(v2);
    }

    topologicalSort(): string[] {
        const visited: Set<string> = new Set();
        const stack: string[] = [];

        const dfs = (vertex: string) => {
            visited.add(vertex);

            const neighbors = this.adjacencyList.get(vertex) || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }

            stack.push(vertex);
        };

        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                dfs(vertex);
            }
        }

        return stack.reverse(); // Reverse the stack to get the correct topological order
    }
}

// Usage example:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'D');
graph.addEdge('F', 'B');
graph.addEdge('B', 'D');
graph.addEdge('F', 'A');
graph.addEdge('D', 'C');

const sortedOrder = graph.topologicalSort();
console.log(sortedOrder);
class Graph {
    private adjacencyList: Map<string, string[]> = new Map();

    addVertex(vertex: string) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(v1: string, v2: string) {
        this.adjacencyList.get(v1)?.push(v2);
    }

    topologicalSort(): string[] {
        const inDegree: Map<string, number> = new Map();
        const queue: string[] = [];
        const result: string[] = [];

        // Calculate in-degrees
        this.adjacencyList.forEach((_, vertex) => {
            inDegree.set(vertex, 0);
        });
        this.adjacencyList.forEach(edges => {
            for (const edge of edges) {
                inDegree.set(edge, (inDegree.get(edge) || 0) + 1);
            }
        });

        // Enqueue vertices with in-degree 0
        inDegree.forEach((degree, vertex) => {
            if (degree === 0) {
                queue.push(vertex);
            }
        });

        // Process vertices
        while (queue.length > 0) {
            const current = queue.shift()!;
            result.push(current);

            const neighbors = this.adjacencyList.get(current) || [];
            for (const neighbor of neighbors) {
                inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
                if (inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Check for cycles
        if (result.length !== this.adjacencyList.size) {
            throw new Error('Graph is not a DAG (contains a cycle)');
        }

        return result;
    }
}

// Usage example:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'D');
graph.addEdge('F', 'B');
graph.addEdge('B', 'D');
graph.addEdge('F', 'A');
graph.addEdge('D', 'C');

const sortedOrder = graph.topologicalSort();
console.log(sortedOrder);
