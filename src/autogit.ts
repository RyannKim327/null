type Node = number;
type Graph = Map<Node, Node[]>;

function tarjanSCC(graph: Graph): Node[][] {
    // Initialize variables
    const index: Map<Node, number> = new Map(); // Discovery time of each node
    const lowLink: Map<Node, number> = new Map(); // Lowest reachable vertex
    const onStack: Set<Node> = new Set(); // Tracks nodes currently on the stack
    const stack: Node[] = []; // Stack for DFS traversal
    const sccs: Node[][] = []; // List of strongly connected components
    let currentIndex = 0; // Global counter for discovery time

    // Helper function to perform DFS
    function dfs(node: Node): void {
        // Set the discovery time and low-link value for the current node
        index.set(node, currentIndex);
        lowLink.set(node, currentIndex);
        currentIndex++;

        // Push the current node onto the stack
        stack.push(node);
        onStack.add(node);

        // Explore all neighbors of the current node
        const neighbors = graph.get(node) || [];
        for (const neighbor of neighbors) {
            if (!index.has(neighbor)) {
                // Neighbor has not been visited yet
                dfs(neighbor);
                // Update the low-link value of the current node
                lowLink.set(node, Math.min(lowLink.get(node)!, lowLink.get(neighbor)!));
            } else if (onStack.has(neighbor)) {
                // Neighbor is on the stack, meaning it's part of the current SCC
                lowLink.set(node, Math.min(lowLink.get(node)!, index.get(neighbor)!));
            }
        }

        // If the current node is a root node, pop the stack and generate an SCC
        if (lowLink.get(node) === index.get(node)) {
            const scc: Node[] = [];
            while (true) {
                const top = stack.pop()!;
                onStack.delete(top);
                scc.push(top);
                if (top === node) break;
            }
            sccs.push(scc);
        }
    }

    // Perform DFS for each unvisited node in the graph
    for (const node of graph.keys()) {
        if (!index.has(node)) {
            dfs(node);
        }
    }

    return sccs;
}

// Example usage
const graph: Graph = new Map([
    [0, [1]],
    [1, [2]],
    [2, [0, 3]],
    [3, [4]],
    [4, [5, 6]],
    [5, [3]],
    [6, [7]],
    [7, [8]],
    [8, [6]]
]);

console.log("Strongly Connected Components:", tarjanSCC(graph));
Strongly Connected Components: [ [ 2, 1, 0 ], [ 5, 4, 3 ], [ 8, 7, 6 ] ]
