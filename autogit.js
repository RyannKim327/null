function breadthFirstSearch(graph, startNode, targetNode) {
    // Keep track of visited nodes and the queue of nodes to visit
    let visited = {};
    let queue = [startNode];

    // Mark the start node as visited
    visited[startNode] = true;

    // Continue searching until the queue is empty
    while (queue.length > 0) {
        let currentNode = queue.shift(); // Get the next node to visit

        // If the current node is the target node, we are done
        if (currentNode === targetNode) {
            return true;
        }

        // Visit all neighboring nodes that have not been visited yet
        let neighbors = graph[currentNode];
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    // If we reach here, the target node is not reachable from the start node
    return false;
}

// Example graph represented as an adjacency list
let graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

let startNode = 'A';
let targetNode = 'F';

if (breadthFirstSearch(graph, startNode, targetNode)) {
    console.log(`Path exists between ${startNode} and ${targetNode}`);
} else {
    console.log(`No path exists between ${startNode} and ${targetNode}`);
}
