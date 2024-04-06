function tarjanSCC(graph) {
    const n = graph.length;
    let index = 0;
    const stack = [];
    const onStack = new Array(n).fill(false);
    const lowlink = new Array(n).fill(0);
    const indexMap = new Array(n).fill(-1);
    const result = [];

    function strongConnect(node) {
        lowlink[node] = index;
        indexMap[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;
        
        for (const neighbor of graph[node]) {
            if (indexMap[neighbor] === -1) {
                strongConnect(neighbor);
                lowlink[node] = Math.min(lowlink[node], lowlink[neighbor]);
            } else if (onStack[neighbor]) {
                lowlink[node] = Math.min(lowlink[node], indexMap[neighbor]);
            }
        }

        if (lowlink[node] === indexMap[node]) {
            const component = [];
            let w;
            do {
                w = stack.pop();
                onStack[w] = false;
                component.push(w);
            } while (w !== node);
            result.push(component);
        }
    }

    for (let i = 0; i < n; i++) {
        if (indexMap[i] === -1) {
            strongConnect(i);
        }
    }

    return result;
}

// Example usage:
const graph = [
    [1],
    [2, 4],
    [3, 6],
    [2, 7],
    [0, 5],
    [4],
    [3, 7],
    [6, 9],
    [7],
    [8]
];

const scc = tarjanSCC(graph);
console.log(scc);
