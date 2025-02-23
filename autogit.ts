class Graph {
    private adjacencyList: { [key: string]: string[] } = {};

    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1: string, v2: string) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1); // for undirected graph
    }

    dfsRecursive(start: string) {
        const visited: { [key: string]: boolean } = {};
        const result: string[] = [];
        
        const explore = (vertex: string) => {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    explore(neighbor);
                }
            });
        };

        explore(start);
        return result;
    }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");

console.log(graph.dfsRecursive("A")); // Output: ['A', 'B', 'C'] (or similar)
class Graph {
    private adjacencyList: { [key: string]: string[] } = {};

    addVertex(vertex: string) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1: string, v2: string) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1); // for undirected graph
    }

    dfsIterative(start: string) {
        const stack: string[] = [start];
        const visited: { [key: string]: boolean } = {};
        const result: string[] = [];

        while (stack.length > 0) {
            const vertex = stack.pop()!;
            if (!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                // Push all unvisited neighbors onto the stack
                this.adjacencyList[vertex].forEach(neighbor => {
                    if (!visited[neighbor]) {
                        stack.push(neighbor);
                    }
                });
            }
        }
        return result;
    }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("A", "C");

console.log(graph.dfsIterative("A")); // Output: ['A', 'C', 'B'] (or similar)
