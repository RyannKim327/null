function breadthLimitedSearch(root, target, limit) {
    if (root === target) {
        return [root];
    }

    let queue = [[root]];
    let visited = new Set();

    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        if (node === target) {
            return path;
        }

        if (path.length <= limit) {
            visited.add(node);
            for (let neighbor of node.neighbors) {
                if (!visited.has(neighbor)) {
                    let newPath = [...path, neighbor];
                    queue.push(newPath);
                }
            }
        }
    }

    return null;
}
