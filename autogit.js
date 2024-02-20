function tarjanSCC(graph) {
    let index = 0;
    let stack = [];
    let onStack = new Set();
    let indexMap = new Map(); // map nodes to their indices
    let lowlink = new Map();
    let result = [];

    function strongConnect(node) {
        indexMap.set(node, index);
        lowlink.set(node, index);
        index++;
        stack.push(node);
        onStack.add(node);

        for (let neighbor of graph[node] || []) {
            if (!indexMap.has(neighbor)) {
                strongConnect(neighbor);
                lowlink.set(node, Math.min(lowlink.get(node), lowlink.get(neighbor)));
            } else if (onStack.has(neighbor)) {
                lowlink.set(node, Math.min(lowlink.get(node), indexMap.get(neighbor)));
            }
        }

        if (indexMap.get(node) === lowlink.get(node)) {
            let scc = [];
            let top = stack.pop();
            onStack.delete(top);
            scc.push(top);

            while (top !== node) {
                top = stack.pop();
                onStack.delete(top);
                scc.push(top);
            }
            result.push(scc);
        }
    }

    for (let node of Object.keys(graph)) {
        if (!indexMap.has(node)) {
            strongConnect(node);
        }
    }

    return result;
}

// Example usage
let graph = {
    'A': ['B'],
    'B': ['C', 'E'],
    'C': ['A', 'D'],
    'D': ['F'],
    'E': ['F'],
    'F': ['G'],
    'G': ['E', 'H'],
    'H': ['I'],
    'I': ['J'],
    'J': [],
};

let result = tarjanSCC(graph);
console.log(result);
