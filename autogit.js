class Graph {
    constructor() {
        this.nodes = new Map();
    }
    
    addNode(node) {
        this.nodes.set(node, new Set());
    }

    addEdge(node1, node2) {
        if (this.nodes.has(node1) && this.nodes.has(node2)) {
            this.nodes.get(node1).add(node2);
            this.nodes.get(node2).add(node1);
        } else {
            console.error("Nodes not found in the graph.");
        }
    }

    biDirectionalSearch(startNode, endNode) {
        let forwardQueue = [startNode];
        let backwardQueue = [endNode];
        let visitedForward = new Set([startNode]);
        let visitedBackward = new Set([endNode]);
        let intersectionNode = null;

        while (forwardQueue.length > 0 && backwardQueue.length > 0) {
            intersectionNode = this.visitNodes(forwardQueue, visitedForward, visitedBackward);
            if (intersectionNode) {
                console.log("Shortest Path Found!");
                return true;
            }

            intersectionNode = this.visitNodes(backwardQueue, visitedBackward, visitedForward);
            if (intersectionNode) {
                console.log("Shortest Path Found!");
                return true;
            }
        }

        console.log("No path found.");
        return false;
    }

    visitNodes(queue, visitedStart, visitedEnd) {
        let currentNode = queue.shift();
        if (visitedEnd.has(currentNode)) {
            return currentNode;
        }

        for (let neighbor of this.nodes.get(currentNode)) {
            if (!visitedStart.has(neighbor)) {
                visitedStart.add(neighbor);
                queue.push(neighbor);
            }
        }

        return null;
    }
}

// Example usage
let graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("C", "E");

graph.biDirectionalSearch("A", "E");
