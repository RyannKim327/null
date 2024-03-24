function tarjanSCC(graph) {
    let index = 0;
    let stack = [];
    let ids = {};
    let lowLinks = {};
    let onStack = {};
    let result = [];

    function dfs(node) {
        ids[node] = index;
        lowLinks[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        // Visit the neighbors of the current node
        graph[node].forEach(neighbor => {
            if (ids[neighbor] === undefined) {
                dfs(neighbor);
                lowLinks[node] = Math.min(lowLinks[node], lowLinks[neighbor]);
            } else if (onStack[neighbor]) {
                lowLinks[node] = Math.min(lowLinks[node], ids[neighbor]);
            }
        });

        // If node is the root of a SCC
        if (ids[node] === lowLinks[node]) {
            let scc = [];
            let popNode;
            do {
                popNode = stack.pop();
                onStack[popNode] = false;
                scc.push(popNode);
            } while (popNode !== node);
            result.push(scc);
        }
    }

    // Visit each node in the graph
    Object.keys(graph).forEach(node => {
        if (ids[node] === undefined) {
            dfs(node);
        }
    });

    return result;
}

// Example usage
const exampleGraph = {
    0: [1],
    1: [2],
    2: [0, 3, 4],
    3: [2, 4],
    4: [5],
    5: [4]
};

const scc = tarjanSCC(exampleGraph);
console.log(scc);
