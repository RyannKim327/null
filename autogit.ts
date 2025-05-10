// Define a node structure
interface Node {
    value: string; // or any other type
    neighbors: Node[];
}

// Define the breadth-limited search function
function breadthLimitedSearch(start: Node, targetValue: string, limit: number): boolean {
    // Base checks
    if (!start) return false;
    
    // Queue for BFS
    const queue: { node: Node; depth: number }[] = [];
    queue.push({ node: start, depth: 0 });
    
    // Set to track visited nodes (to prevent cycles)
    const visited = new Set<Node>();

    // BFS loop
    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // get the first element from the queue

        // Check if we found the target node
        if (node.value === targetValue) {
            return true;
        }

        // If we haven't hit the depth limit, enqueue neighbors
        if (depth < limit) {
            visited.add(node); // Mark this node as visited
            for (const neighbor of node.neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push({ node: neighbor, depth: depth + 1 });
                }
            }
        }
    }

    // If we exhaust the queue without finding the target value
    return false;
}

// Example usage:

// Create a simple graph
const nodeA: Node = { value: 'A', neighbors: [] };
const nodeB: Node = { value: 'B', neighbors: [] };
const nodeC: Node = { value: 'C', neighbors: [] };
const nodeD: Node = { value: 'D', neighbors: [] };

nodeA.neighbors.push(nodeB);
nodeA.neighbors.push(nodeC);
nodeB.neighbors.push(nodeD);

// Searching for a node with value 'D' with a depth limit of 2
const found = breadthLimitedSearch(nodeA, 'D', 2);
console.log(found); // Output: false (since 'D' is at depth 2 and not reachable within limit)
