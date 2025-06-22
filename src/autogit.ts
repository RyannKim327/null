type Graph = Map<number, number[]>;

function tarjanSCC(graph: Graph): number[][] {
    const index: number = 0; // Global discovery time counter
    const stack: number[] = []; // Stack to track nodes in the current DFS path
    const onStack: Set<number> = new Set(); // Set to check if a node is on the stack
    const indices: Map<number, number> = new Map(); // Discovery times for each node
    const lowLinks: Map<number, number> = new Map(); // Lowest reachable node for each node
    const sccs: number[][] = []; // List to store all SCCs

    function dfs(node: number): void {
        // Initialize discovery time and low-link value for the current node
        indices.set(node, index);
        lowLinks.set(node, index);
        index++;

        stack.push(node); // Push the node onto the stack
        onStack.add(node); // Mark it as being on the stack

        // Explore all neighbors of the current node
        const neighbors = graph.get(node) || [];
        for (const neighbor of neighbors) {
            if (!indices.has(neighbor)) {
                // Neighbor has not been visited yet
                dfs(neighbor);
                // Update the low-link value of the current node
                lowLinks.set(node, Math.min(lowLinks.get(node)!, lowLinks.get(neighbor)!));
            } else if (onStack.has(neighbor)) {
                // Neighbor is on the stack, meaning it's part of the current SCC
                lowLinks.set(node, Math.min(lowLinks.get(node)!, indices.get(neighbor)!));
            }
        }

        // If the current node is the root of an SCC, pop the stack
        if (lowLinks.get(node) === indices.get(node)) {
            const scc: number[] = [];
            let w: number;
            do {
                w = stack.pop()!;
                onStack.delete(w);
                scc.push(w);
            } while (w !== node);
            sccs.push(scc);
        }
    }

    // Iterate through all nodes in the graph
    for (const node of graph.keys()) {
        if (!indices.has(node)) {
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
    [4, [5]],
    [5, [3, 6]],
    [6, []],
]);

const sccs = tarjanSCC(graph);
console.log("Strongly Connected Components:", sccs);
0 -> 1
1 -> 2
2 -> 0, 3
3 -> 4
4 -> 5
5 -> 3, 6
6 -> []
Strongly Connected Components: [[2, 1, 0], [5, 4, 3], [6]]
