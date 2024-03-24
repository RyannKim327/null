function breadthLimitedSearch(root, target, depthLimit) {
    if (!root) {
        return null;
    }
    
    let queue = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        const { node, depth } = queue.shift();

        if (node.value === target) {
            return node;
        }

        if (depth < depthLimit) {
            for (let child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null;
}
