function tarjanStronglyConnectedComponents(graph) {
    // Initialize variables
    let index = 0;
    let stack = [];
    let indices = {};
    let lowlinks = {};
    let onStack = {};
    let components = [];

    function strongConnect(node) {
        indices[node] = index;
        lowlinks[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        graph[node].forEach(neighbor => {
            if (typeof indices[neighbor] === 'undefined') {
                strongConnect(neighbor);
                lowlinks[node] = Math.min(lowlinks[node], lowlinks[neighbor]);
            } else if (onStack[neighbor]) {
                lowlinks[node] = Math.min(lowlinks[node], indices[neighbor]);
            }
        });

        if (indices[node] === lowlinks[node]) {
            let component = [];
            let nextNode = null;
            do {
                nextNode = stack.pop();
                onStack[nextNode] = false;
                component.push(nextNode);
            } while (nextNode !== node);
            components.push(component);
        }
    }

    // Start the algorithm
    Object.keys(graph).forEach(node => {
        if (typeof indices[node] === 'undefined') {
            strongConnect(node);
        }
    });

    return components;
}

// Example usage
const graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 6],
    5: [0],
    6: [3, 7],
    7: [6]
};

const components = tarjanStronglyConnectedComponents(graph);
console.log(components);
