class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addNode(node) {
        this.adjList.set(node, []);
    }

    addEdge(node1, node2) {
        this.adjList.get(node1).push(node2);
        this.adjList.get(node2).push(node1);
    }

    depthFirstSearch(startNode) {
        const visited = new Set();
        const stack = [startNode];

        while (stack.length > 0) {
            const currentNode = stack.pop();

            if (!visited.has(currentNode)) {
                visited.add(currentNode);
                console.log(currentNode);

                const neighbors = this.adjList.get(currentNode);
                for (let neighbor of neighbors) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Creating a graph
const graph = new Graph();
graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

// Starting DFS from node 0
graph.depthFirstSearch(0);
