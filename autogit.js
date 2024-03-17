function tarjanSCC(graph) {
    let index = 0;
    let stack = [];
    let ids = new Map();
    let lowLinks = new Map();
    let onStack = new Map();
    let result = [];

    function strongConnect(node) {
        ids.set(node, index);
        lowLinks.set(node, index);
        index++;
        stack.push(node);
        onStack.set(node, true);

        for (let neighbor of graph[node]) {
            if (!ids.has(neighbor)) {
                strongConnect(neighbor);
                lowLinks.set(node, Math.min(lowLinks.get(node), lowLinks.get(neighbor)));
            } else if (onStack.get(neighbor)) {
                lowLinks.set(node, Math.min(lowLinks.get(node), ids.get(neighbor)));
            }
        }

        if (ids.get(node) === lowLinks.get(node)) {
            let component = [];
            let nextNode;
            do {
                nextNode = stack.pop();
                onStack.set(nextNode, false);
                component.push(nextNode);
            } while (nextNode !== node);
            result.push(component);
        }
    }

    for (let node of Object.keys(graph)) {
        if (!ids.has(node)) {
            strongConnect(node);
        }
    }

    return result;
}

// Example usage
let graph = {
    'A': ['B'],
    'B': ['C', 'E'],
    'C': ['D', 'F'],
    'D': ['C', 'H'],
    'E': ['A', 'F'],
    'F': ['G'],
    'G': ['E', 'H'],
    'H': ['I'],
    'I': ['J'],
    'J': ['H']
};

let scc = tarjanSCC(graph);
console.log(scc);
