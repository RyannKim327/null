function depthLimitedSearch(node: Node, depth: number): Node | null {
    if (depth === 0) {
        return null;
    }
    
    if (isGoal(node)) {
        return node;
    }
    
    for (const child of expand(node)) {
        const result = depthLimitedSearch(child, depth - 1);
        if (result !== null) {
            return result;
        }
    }
    
    return null;
}
