function tarjanSCC(graph) {
    let index = 0;
    let stack = [];
    let indexMap = new Map();
    let lowLinkMap = new Map();
    let result = [];

    function tarjanDFS(node) {
        indexMap.set(node, index);
        lowLinkMap.set(node, index);
        index++;
        stack.push(node);

        for (let neighbor of graph[node]) {
            if (!indexMap.has(neighbor)) {
                tarjanDFS(neighbor);
                lowLinkMap.set(node, Math.min(lowLinkMap.get(node), lowLinkMap.get(neighbor)));
            } else if (stack.includes(neighbor)) {
                lowLinkMap.set(node, Math.min(lowLinkMap.get(node), indexMap.get(neighbor)));
            }
        }

        if (indexMap.get(node) === lowLinkMap.get(node)) {
            let scc = [];
            let popNode;
            do {
                popNode = stack.pop();
                scc.push(popNode);
            } while (popNode !== node);
            result.push(scc);
        }
    }

    for (let node in graph) {
        if (!indexMap.has(node)) {
            tarjanDFS(node);
        }
    }

    return result;
}

// Example usage:
const graph = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A', 'D'],
    'D': ['E'],
    'E': ['F'],
    'F': ['D', 'G'],
    'G': ['H'],
    'H': ['F', 'I'],
    'I': []
};

const sccResult = tarjanSCC(graph);
console.log(sccResult);
