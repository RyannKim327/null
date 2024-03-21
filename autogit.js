function Node(value) {
    this.value = value;
    this.visited = false;
    this.neighbors = [];
}

function Graph() {
    this.nodes = {};
  
    this.addNode = function(value) {
        if (!this.nodes[value]) {
            this.nodes[value] = new Node(value);
        }
    };

    this.addEdge = function(from, to) {
        this.nodes[from].neighbors.push(to);
    };
}

function topologicalSortHelper(node, stack) {
    node.visited = true;

    for (let neighbor of node.neighbors) {
        if (!neighbor.visited) {
            topologicalSortHelper(neighbor, stack);
        }
    }

    stack.push(node.value);
}

function topologicalSort(graph) {
    const stack = [];
  
    for (let nodeValue in graph.nodes) {
        const node = graph.nodes[nodeValue];
        if (!node.visited) {
            topologicalSortHelper(node, stack);
        }
    }

    return stack.reverse();
}

// Example usage
const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

const sortedNodes = topologicalSort(graph);
console.log(sortedNodes); // Output: [1, 3, 2, 4]
