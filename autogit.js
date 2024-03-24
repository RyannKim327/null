function tarjanSCC(graph) {
    let index = 0;
    let stack = [];
    let indexes = {};
    let lowLinks = {};
    let onStack = {};
    let scc = [];

    function strongConnect(node) {
        indexes[node] = index;
        lowLinks[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        for (let neighbor of graph[node]) {
            if (indexes[neighbor] === undefined) {
                strongConnect(neighbor);
                lowLinks[node] = Math.min(lowLinks[node], lowLinks[neighbor]);
            } else if (onStack[neighbor]) {
                lowLinks[node] = Math.min(lowLinks[node], indexes[neighbor]);
            }
        }

        if (lowLinks[node] === indexes[node]) {
            let component = [];
            let nextNode;
            do {
                nextNode = stack.pop();
                onStack[nextNode] = false;
                component.push(nextNode);
            } while (nextNode !== node);
            scc.push(component);
        }
    }

    for (let node in graph) {
        if (indexes[node] === undefined) {
            strongConnect(node);
        }
    }

    return scc;
}

// Example graph representation using adjacency list
const graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 6],
    5: [0],
    6: [4, 7],
    7: [6]
};

const scc = tarjanSCC(graph);
console.log(scc);
