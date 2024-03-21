// Sample tree data structure
const tree = {
    value: 'A',
    children: [
        {
            value: 'B',
            children: [
                {
                    value: 'D',
                    children: []
                },
                {
                    value: 'E',
                    children: []
                }
            ]
        },
        {
            value: 'C',
            children: [
                {
                    value: 'F',
                    children: []
                }
            ]
        }
    ]
};

// Depth-Limited Search algorithm
function depthLimitedSearch(node, goal, depthLimit) {
    let stack = [{ node: node, depth: 0 }];

    while (stack.length > 0) {
        const { node, depth } = stack.pop();

        if (node.value === goal) {
            return node.value;
        }

        if (depth < depthLimit) {
            for (let child of node.children) {
                stack.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null;
}

// Test the depthLimitedSearch function
console.log(depthLimitedSearch(tree, 'F', 3)); // Output: F
console.log(depthLimitedSearch(tree, 'X', 3)); // Output: null
