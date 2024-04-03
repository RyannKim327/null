class Graph {
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1); // Assuming an undirected graph
    }

    dfs(startNode) {
        const visited = {};
        const result = [];

        const dfsRec = (node) => {
            if (!node) return;

            visited[node] = true;
            result.push(node);

            this.adjList[node].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfsRec(neighbor);
                }
            });
        };

        dfsRec(startNode);

        return result;
    }
}

// Example usage
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');

console.log(graph.dfs('A')); // Output: ['A', 'B', 'C', 'D', 'E']
