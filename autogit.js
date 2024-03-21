class BiDirectionalSearch {
    constructor(startNode, endNode) {
        this.startNode = startNode;
        this.endNode = endNode;
        this.frontierStart = [startNode];
        this.frontierEnd = [endNode];
        this.visitedStart = new Set();
        this.visitedEnd = new Set();
    }

    search() {
        while (this.frontierStart.length > 0 && this.frontierEnd.length > 0) {
            const result = this.bfs(this.frontierStart, this.visitedStart, this.visitedEnd);
            if (result) {
                return result;
            }

            result = this.bfs(this.frontierEnd, this.visitedEnd, this.visitedStart);
            if (result) {
                return result;
            }
        }

        return null;
    }

    bfs(frontier, visited, targetVisited) {
        const node = frontier.shift();

        if (targetVisited.has(node)) {
            return node;
        }

        visited.add(node);

        for (let neighbor of node.neighbors) {
            if (!visited.has(neighbor)) {
                frontier.push(neighbor);
            }
        }

        return null;
    }
}

// Usage
class Node {
    constructor(value) {
        this.value = value;
        this.neighbors = [];
    }
}

const startNode = new Node('A');
const endNode = new Node('B');

startNode.neighbors.push(new Node('C'));
startNode.neighbors.push(new Node('D'));
startNode.neighbors.push(new Node('E'));

endNode.neighbors.push(new Node('F'));
endNode.neighbors.push(new Node('G'));
endNode.neighbors.push(new Node('C'));

const biDirectionalSearch = new BiDirectionalSearch(startNode, endNode);
const result = biDirectionalSearch.search();

if (result) {
    console.log('Path found!');
} else {
    console.log('Path not found.');
}
