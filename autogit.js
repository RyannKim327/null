function tarjan(graph) {
    let index = 0;
    let stack = [];
    let indexes = {};
    let lowlinks = {};
    let onStack = {};

    let result = [];

    function strongConnect(node) {
        indexes[node] = index;
        lowlinks[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        for (let neighbor of graph[node]) {
            if (indexes[neighbor] === undefined) {
                strongConnect(neighbor);
                lowlinks[node] = Math.min(lowlinks[node], lowlinks[neighbor]);
            } else if (onStack[neighbor]) {
                lowlinks[node] = Math.min(lowlinks[node], indexes[neighbor]);
            }
        }

        if (lowlinks[node] === indexes[node]) {
            let component = [];
            let item = stack.pop();
            onStack[item] = false;
            component.push(item);

            while (item !== node) {
                item = stack.pop();
                onStack[item] = false;
                component.push(item);
            }

            result.push(component);
        }
    }

    for (let node in graph) {
        if (indexes[node] === undefined) {
            strongConnect(node);
        }
    }

    return result;
}

// Example graph representation
const graph = {
    'A': ['B'],
    'B': ['C', 'E'],
    'C': ['A', 'D'],
    'D': ['F'],
    'E': ['D'],
    'F': ['G'],
    'G': ['H'],
    'H': ['F'],
};

const components = tarjan(graph);
console.log(components);
