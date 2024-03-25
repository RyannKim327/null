function tarjanStronglyConnectedComponents(graph) {
    let index = 0;
    let stack = [];
    let indices = new Array(graph.length).fill(-1);
    let lowlinks = new Array(graph.length).fill(0);
    let onStack = new Array(graph.length).fill(false);
    let result = [];

    function dfs(node) {
        indices[node] = index;
        lowlinks[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        for (let neighbor of graph[node]) {
            if (indices[neighbor] === -1) {
                dfs(neighbor);
                lowlinks[node] = Math.min(lowlinks[node], lowlinks[neighbor]);
            } else if (onStack[neighbor]) {
                lowlinks[node] = Math.min(lowlinks[node], indices[neighbor]);
            }
        }

        if (lowlinks[node] === indices[node]) {
            let scc = [];
            let poppedNode;
            do {
                poppedNode = stack.pop();
                onStack[poppedNode] = false;
                scc.push(poppedNode);
            } while (poppedNode !== node);
            result.push(scc);
        }
    }

    for (let i = 0; i < graph.length; i++) {
        if (indices[i] === -1) {
            dfs(i);
        }
    }

    return result;
}

// Example
const graph = [
    [1],
    [2, 4],
    [0, 3],
    [2],
    [5],
    [4, 6],
    [5, 7],
    [6, 10],
    [2, 8],
    [9],
    [8, 11],
    [10]
];

const scc = tarjanStronglyConnectedComponents(graph);
console.log(scc);
