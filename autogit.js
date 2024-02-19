function tarjanSCC(graph) {
    let index = 0;
    let stack = [];
    let indices = {};
    let lowlinks = {};
    let onStack = {};
    let sccs = [];

    function strongconnect(node) {
        indices[node] = index;
        lowlinks[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        for (let neighbor of graph[node]) {
            if (indices[neighbor] === undefined) {
                strongconnect(neighbor);
                lowlinks[node] = Math.min(lowlinks[node], lowlinks[neighbor]);
            } else if (onStack[neighbor]) {
                lowlinks[node] = Math.min(lowlinks[node], indices[neighbor]);
            }
        }

        if (lowlinks[node] === indices[node]) {
            let scc = [];
            let currNode;
            do {
                currNode = stack.pop();
                onStack[currNode] = false;
                scc.push(currNode);
            } while (currNode !== node);
            sccs.push(scc);
        }
    }

    for (let node in graph) {
        if (indices[node] === undefined) {
            strongconnect(node);
        }
    }

    return sccs;
}
let graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5],
    5: [3, 6],
    6: [7],
    7: [8],
    8: [6, 9],
    9: [7]
};
let stronglyConnectedComponents = tarjanSCC(graph);
console.log(stronglyConnectedComponents);
