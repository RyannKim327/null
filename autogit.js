function tarjanSCC(graph) {
    let index = 0;
    let stack = [];
    let indices = {};
    let lowLink = {};
    let onStack = {};
    let sccList = [];

    function strongConnect(node) {
        indices[node] = index;
        lowLink[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        graph[node].forEach(neighbor => {
            if (indices[neighbor] === undefined) {
                strongConnect(neighbor);
                lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
            } else if (onStack[neighbor]) {
                lowLink[node] = Math.min(lowLink[node], indices[neighbor]);
            }
        });

        if (indices[node] === lowLink[node]) {
            let component = [];
            let popNode = null;
            do {
                popNode = stack.pop();
                onStack[popNode] = false;
                component.push(popNode);
            } while (popNode !== node);
            sccList.push(component);
        }
    }

    Object.keys(graph).forEach(node => {
        if (indices[node] === undefined) {
            strongConnect(node);
        }
    });

    return sccList;
}

// Example Usage
const graph = {
    0: [1, 2],
    1: [0],
    2: [3],
    3: [4],
    4: [2, 5],
    5: [6],
    6: [5],
};

const scc = tarjanSCC(graph);
console.log(scc); // Output: [[6, 5], [4, 3, 2], [1, 0]]
