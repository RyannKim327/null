function tarjan(graph) {
    let index = 0;
    let stack = [];
    let indices = new Map();
    let lowLinks = new Map();
    let onStack = new Set();
    let result = [];

    function strongConnect(node) {
        indices.set(node, index);
        lowLinks.set(node, index);
        index++;
        stack.push(node);
        onStack.add(node);

        for (let neighbor of graph[node]) {
            if (!indices.has(neighbor)) {
                strongConnect(neighbor);
                lowLinks.set(node, Math.min(lowLinks.get(node), lowLinks.get(neighbor)));
            } else if (onStack.has(neighbor)) {
                lowLinks.set(node, Math.min(lowLinks.get(node), indices.get(neighbor)));
            }
        }

        if (lowLinks.get(node) === indices.get(node)) {
            let component = [];
            let member;
            do {
                member = stack.pop();
                onStack.delete(member);
                component.push(member);
            } while (member !== node);
            result.push(component);
        }
    }

    for (let node of Object.keys(graph)) {
        if (!indices.has(node)) {
            strongConnect(node);
        }
    }

    return result;
}

// Example usage:
let graph = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A', 'D'],
    'D': ['E'],
    'E': ['C'],
    'F': ['G'],
    'G': ['H'],
    'H': ['F', 'I'],
    'I': ['J'],
    'J': ['H']
};

let scc = tarjan(graph);
console.log(scc);
