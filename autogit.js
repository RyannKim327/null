function tarjanSCC(graph) {
    let index = 0;
    let stack = [];
    let visited = new Set();
    let lowLink = {};
    let result = [];

    function strongConnect(node) {
        lowLink[node] = index;
        index++;
        stack.push(node);
        visited.add(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                strongConnect(neighbor);
                lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
            } else if (stack.includes(neighbor)) {
                lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
            }
        }

        if (lowLink[node] === index) {
            let component = [];
            let top = null;
            do {
                top = stack.pop();
                component.push(top);
            } while (top !== node);
            result.push(component);
        }
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            strongConnect(node);
        }
    }

    return result;
}

// Example usage
const graph = {
    'A': ['B'],
    'B': ['C', 'E', 'F'],
    'C': ['D', 'G'],
    'D': ['C', 'H'],
    'E': ['A', 'F'],
    'F': ['G'],
    'G': ['F'],
    'H': ['D', 'G']
};

const scc = tarjanSCC(graph);
console.log(scc);
