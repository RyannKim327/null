function depthLimitedSearch(node, goal, depth) {
    if (depth === 0) {
        return null;
    }

    if (node === goal) {
        return node;
    }

    for (let child of node.children) {
        let result = depthLimitedSearch(child, goal, depth - 1);
        if (result !== null) {
            return result;
        }
    }

    return null;
}
