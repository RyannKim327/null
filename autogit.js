function tarjan(graph) {
    let index = 0;
    let stack = [];
    let onStack = [];
    let indexMap = new Map();
    let lowLink = new Map();
    let result = [];

    function strongConnect(node) {
        indexMap.set(node, index);
        lowLink.set(node, index);
        index++;
        stack.push(node);
        onStack[node] = true;

        for (let neighbor of graph[node]) {
            if (!indexMap.has(neighbor)) {
                strongConnect(neighbor);
                lowLink.set(node, Math.min(lowLink.get(node), lowLink.get(neighbor)));
            } else if (onStack[neighbor]) {
                lowLink.set(node, Math.min(lowLink.get(node), indexMap.get(neighbor)));
            }
        }

        if (lowLink.get(node) === indexMap.get(node)) {
            let component = [];
            while (true) {
                let w = stack.pop();
                onStack[w] = false;
                component.push(w);
                if (w === node) break;
            }
            result.push(component);
        }
    }

    for (let node in graph) {
        if (!indexMap.has(node)) {
            strongConnect(node);
        }
    }

    return result;
}

// Example usage
let graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 6],
    5: [0],
    6: [0, 2, 4],
};

let stronglyConnectedComponents = tarjan(graph);
console.log(stronglyConnectedComponents);
