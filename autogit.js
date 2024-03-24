function tarjanSCC(graph) {
    let index = 0;
    let stack = [];
    let indices = {};
    let lowlinks = {};
    let onStack = {};
    let result = [];

    function strongConnect(node) {
        indices[node] = index;
        lowlinks[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        for (let neighbor of graph[node]) {
            if (!(neighbor in indices)) {
                strongConnect(neighbor);
                lowlinks[node] = Math.min(lowlinks[node], lowlinks[neighbor]);
            } else if (onStack[neighbor]) {
                lowlinks[node] = Math.min(lowlinks[node], indices[neighbor]);
            }
        }

        if (lowlinks[node] === indices[node]) {
            let component = [];
            let nextNode = null;
            do {
                nextNode = stack.pop();
                onStack[nextNode] = false;
                component.push(nextNode);
            } while (nextNode !== node);
            result.push(component);
        }
    }

    for (let node in graph) {
        if (!(node in indices)) {
            strongConnect(node);
        }
    }

    return result;
}

// Example usage:
let graph = {
    'A': ['B'],
    'B': ['C', 'E'],
    'C': ['A', 'D'],
    'D': ['E'],
    'E': ['F'],
    'F': ['G'],
    'G': ['D', 'H'],
    'H': ['I'],
    'I': ['J', 'G']
};

let scc = tarjanSCC(graph);
console.log(scc);
