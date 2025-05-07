// Define a type for the graph or tree node
type Node<T> = {
    value: T;
    children: Node<T>[];
};

// Depth-limited search function
function depthLimitedSearch<T>(root: Node<T>, target: T, limit: number): Node<T> | null {
    // Stack for the nodes
    const stack: { node: Node<T>, depth: number }[] = [];
    stack.push({ node: root, depth: 0 });

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!;

        // Check if we have found the target
        if (node.value === target) {
            return node;
        }

        // If we haven't reached the limit, add children to the stack
        if (depth < limit) {
            for (const child of node.children) {
                stack.push({ node: child, depth: depth + 1 });
            }
        }
    }

    // If we exhaust the stack and haven't found the target, return null
    return null;
}

// Example usage
const tree: Node<number> = {
    value: 1,
    children: [
        { value: 2, children: [] },
        { 
            value: 3, 
            children: [
                { value: 4, children: [] },
                { value: 5, children: [] }
            ] 
        }
    ]
};

const targetValue = 4;
const depthLimit = 2;

const result = depthLimitedSearch(tree, targetValue, depthLimit);
console.log(result ? `Found target: ${result.value}` : 'Target not found');
