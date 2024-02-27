function tarjanSCC(graph) {
    const n = graph.length;
    const stack = [];
    const visited = new Array(n).fill(false);
    const ids = new Array(n).fill(-1);
    const lowLink = new Array(n).fill(-1);
    const onStack = new Array(n).fill(false);
    const result = [];
    let id = 0;

    function dfs(node) {
        stack.push(node);
        onStack[node] = true;
        visited[node] = true;
        ids[node] = id;
        lowLink[node] = id;
        id++;

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
            if (onStack[neighbor]) {
                lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
            }
        }

        if (ids[node] === lowLink[node]) {
            const component = [];
            let poppedNode;
            do {
                poppedNode = stack.pop();
                onStack[poppedNode] = false;
                component.push(poppedNode);
            } while (poppedNode !== node);
            result.push(component);
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    return result;
}

// Example graph represented as an adjacency list
const graph = [
    [1, 2],
    [3],
    [4],
    [0, 5],
    [2, 6],
    [5],
    [4],
    [6]
];

const scc = tarjanSCC(graph);
scc.forEach(component => console.log(component));
