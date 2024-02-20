function tarjanStronglyConnectedComponents(graph) {
    let index = 0;
    let stack = [];
    let indices = {};
    let lowLink = {};
    let onStack = {};
    let result = [];

    function strongConnect(node) {
        indices[node] = index;
        lowLink[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        for (let neighbor of graph[node]) {
            if (indices[neighbor] === undefined) {
                strongConnect(neighbor);
                lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
            } else if (onStack[neighbor]) {
                lowLink[node] = Math.min(lowLink[node], indices[neighbor]);
            }
        }

        if (lowLink[node] === indices[node]) {
            let component = [];
            let nextNode;
            do {
                nextNode = stack.pop();
                onStack[nextNode] = false;
                component.push(nextNode);
            } while (nextNode !== node);
            result.push(component);
        }
    }

    for (let node in graph) {
        if (indices[node] === undefined) {
            strongConnect(node);
        }
    }

    return result;
}

// Example usage
const graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 6],
    5: [4],
    6: [7],
    7: [6]
};

const scc = tarjanStronglyConnectedComponents(graph);
console.log(scc);
