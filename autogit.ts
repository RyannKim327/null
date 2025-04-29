type Graph = Map<string, string[]>;

function depthFirstSearch(graph: Graph, startNode: string): Set<string> {
    const visited = new Set<string>();

    function dfs(node: string) {
        if (visited.has(node)) return;
        visited.add(node);
        console.log(`Visiting: ${node}`); // or handle the node as needed

        const neighbors = graph.get(node) ?? [];
        for (const neighbor of neighbors) {
            dfs(neighbor);
        }
    }

    dfs(startNode);
    return visited; // returns all nodes reachable from startNode
}

// Example usage:
const myGraph: Graph = new Map([
    ['A', ['B', 'C']],
    ['B', ['D', 'E']],
    ['C', ['F']],
    ['D', []],
    ['E', ['F']],
    ['F', []]
]);

const visitedNodes = depthFirstSearch(myGraph, 'A');
console.log('Visited:', Array.from(visitedNodes));
