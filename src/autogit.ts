type Graph = {
    [key: string]: string[];
};
function depthLimitedSearch(graph: Graph, start: string, goal: string, limit: number): boolean {
    const stack: [string, number][] = [[start, 0]]; // stack holds tuples of (node, depth)

    while (stack.length > 0) {
        const [node, depth] = stack.pop()!;

        // Check if we've found the goal
        if (node === goal) {
            return true;
        }

        // If the current depth is less than the limit, explore children
        if (depth < limit) {
            const neighbors = graph[node] || [];
            for (const neighbor of neighbors) {
                stack.push([neighbor, depth + 1]); // Increment depth for children
            }
        }
    }

    return false; // Goal not found within depth limit.
}

// Example usage:
const graph: Graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["G"],
    F: [],
    G: []
};

const startNode = "A";
const goalNode = "G";
const depthLimit = 2;

const found = depthLimitedSearch(graph, startNode, goalNode, depthLimit);
console.log(`Found goal '${goalNode}': ${found}`);
