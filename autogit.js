function tarjan(graph) {
    let index = 0;
    let stack = [];
    let onStack = [];
    let indices = {};
    let lowlinks = [];
    let components = [];

    function strongConnect(node) {
        indices[node] = index;
        lowlinks[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        graph[node].forEach(neighbor => {
            if (indices[neighbor] === undefined) {
                strongConnect(neighbor);
                lowlinks[node] = Math.min(lowlinks[node], lowlinks[neighbor]);
            } else if (onStack[neighbor]) {
                lowlinks[node] = Math.min(lowlinks[node], indices[neighbor]);
            }
        });

        if (lowlinks[node] === indices[node]) {
            let component = [];
            while (true) {
                let w = stack.pop();
                onStack[w] = false;
                component.push(w);
                if (w === node) {
                    break;
                }
            }
            components.push(component);
        }
    }

    for (let node in graph) {
        if (indices[node] === undefined) {
            strongConnect(node);
        }
    }

    return components;
}

// Example usage:
const graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5],
    5: [3],
    6: [5, 7],
    7: [6, 8],
    8: [7]
};

const components = tarjan(graph);
console.log(components);
