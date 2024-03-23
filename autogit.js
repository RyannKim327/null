function TarjanSCC(graph) {
    let index = 0;
    let stack = [];
    let onStack = new Set();
    let indexMap = new Map();
    let lowlinkMap = new Map();
    let result = [];

    function strongConnect(node) {
        indexMap.set(node, index);
        lowlinkMap.set(node, index);
        index++;
        stack.push(node);
        onStack.add(node);

        graph[node].forEach(neighbor => {
            if (!indexMap.has(neighbor)) {
                strongConnect(neighbor);
                lowlinkMap.set(node, Math.min(lowlinkMap.get(node), lowlinkMap.get(neighbor)));
            } else if (onStack.has(neighbor)) {
                lowlinkMap.set(node, Math.min(lowlinkMap.get(node), indexMap.get(neighbor)));
            }
        });

        if (indexMap.get(node) === lowlinkMap.get(node)) {
            let scc = [];
            let popNode;
            do {
                popNode = stack.pop();
                onStack.delete(popNode);
                scc.push(popNode);
            } while (popNode !== node);
            result.push(scc);
        }
    }

    for (let node in graph) {
        if (!indexMap.has(node)) {
            strongConnect(node);
        }
    }

    return result;
}

// Example Usage
const graph = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A', 'D'],
    'D': ['E'],
    'E': ['F'],
    'F': ['D', 'G'],
    'G': ['H'],
    'H': ['I'],
    'I': []
};

const scc = TarjanSCC(graph);
console.log(scc);
