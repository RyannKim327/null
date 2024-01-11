function depthLimitedSearch(node, goal, depthLimit) {
    if (node === goal) {
        return true;
    }

    if (depthLimit === 0) {
        return false;
    }

    for (let i = 0; i < node.children.length; i++) {
        if (depthLimitedSearch(node.children[i], goal, depthLimit - 1)) {
            return true;
        }
    }

    return false;
}
// Define a simple tree structure
const rootNode = {
    value: 'A',
    children: [
        {
            value: 'B',
            children: [
                {
                    value: 'C',
                    children: []
                },
                {
                    value: 'D',
                    children: []
                }
            ]
        },
        {
            value: 'E',
            children: [
                {
                    value: 'F',
                    children: []
                },
                {
                    value: 'G',
                    children: []
                }
            ]
        }
    ]
};

// Search for node 'G' with a depth limit of 2
const result = depthLimitedSearch(rootNode, 'G', 2);

console.log(result); // Output: true
