type Graph = { [key: string]: string[] };

function depthLimitedSearch(graph: Graph, startNode: string, goalNode: string, depthLimit: number): boolean {
    // Helper function for the recursive search
    function dls(currentNode: string, currentDepth: number): boolean {
        console.log(`Visiting node: ${currentNode} at depth: ${currentDepth}`);
        
        // If we reach the goal node
        if (currentNode === goalNode) {
            return true;
        }

        // If we've reached the depth limit, stop searching further
        if (currentDepth >= depthLimit) {
            return false;
        }

        // Get the neighbors of the current node
        const neighbors = graph[currentNode] || [];
        
        // Explore each neighbor
        for (let neighbor of neighbors) {
            if (dls(neighbor, currentDepth + 1)) {
                return true; // If the goal is found in deeper search
            }
        }

        return false; // Goal not found in this path
    }

    return dls(startNode, 0);
}

// Sample graph
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F', 'G'],
    D: [],
    E: ['H'],
    F: [],
    G: [],
    H: []
};

// Example usage
const startNode = 'A';
const goalNode = 'H';
const depthLimit = 3;
const found = depthLimitedSearch(graph, startNode, goalNode, depthLimit);

console.log(found ? 'Goal found!' : 'Goal not found.');
