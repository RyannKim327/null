class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        this.adjList.set(vertex, []);
    }

    addEdge(vertex1, vertex2) {
        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1);
    }

    biDirectionalSearch(start, end) {
        let visitedFromStart = {};
        let visitedFromEnd = {};

        let queueFromStart = [start];
        let queueFromEnd = [end];

        visitedFromStart[start] = null;
        visitedFromEnd[end] = null;

        while (queueFromStart.length > 0 || queueFromEnd.length > 0) {
            let currentNodeFromStart = queueFromStart.shift();
            let currentNodeFromEnd = queueFromEnd.shift();

            if (currentNodeFromStart === currentNodeFromEnd || visitedFromStart[currentNodeFromEnd]) {
                console.log("Path found!");
                let path = [];
                let node = currentNodeFromStart;
                while (node !== null) {
                    path.push(node);
                    node = visitedFromStart[node];
                }

                node = visitedFromEnd[currentNodeFromEnd];
                while (node !== null) {
                    path.unshift(node);
                    node = visitedFromEnd[node];
                }

                console.log(path.join(" -> "));
                return;
            }

            if (!visitedFromStart[currentNodeFromStart]) {
                visitedFromStart[currentNodeFromStart] = null;
                this.adjList.get(currentNodeFromStart).forEach(neighbor => {
                    if (!visitedFromStart[neighbor]) {
                        visitedFromStart[neighbor] = currentNodeFromStart;
                        queueFromStart.push(neighbor);
                    }
                });
            }

            if (!visitedFromEnd[currentNodeFromEnd]) {
                visitedFromEnd[currentNodeFromEnd] = null;
                this.adjList.get(currentNodeFromEnd).forEach(neighbor => {
                    if (!visitedFromEnd[neighbor]) {
                        visitedFromEnd[neighbor] = currentNodeFromEnd;
                        queueFromEnd.push(neighbor);
                    }
                });
            }
        }

        console.log("Path not found!");
    }
}

// Example usage
let graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 5);

graph.biDirectionalSearch(0, 5);
