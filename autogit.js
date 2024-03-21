function depthLimitedSearch(node, goal, depth) {
    if (node === goal) {
        return node;
    }

    if (depth === 0) {
        return null;
    }

    for (let child of node.children) {
        let result = depthLimitedSearch(child, goal, depth - 1);
        if (result !== null) {
            return result;
        }
    }

    return null;
}
