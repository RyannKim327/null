// Depth-First Search algorithm
function dfs(graph, startNode) {
    let visited = new Set();
    let stack = [startNode];

    while (stack.length > 0) {
        let currentNode = stack.pop();

        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            console.log(currentNode);

            // Add all unvisited neighbors to the stack
            for (let neighbor of graph[currentNode]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example adjacency list representation of a graph
let graph = {
    1: [2, 3],
    2: [4, 5],
    3: [6],
    4: [],
    5: [],
    6: []
};

// Start DFS from node 1
dfs(graph, 1);
