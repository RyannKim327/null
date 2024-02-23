function tarjanSCC(graph) {
    let index = 0;
    let stack = [];
    let indices = new Map();
    let lowLinks = new Map();
    let onStack = new Set();
    let sccList = [];

    function strongConnect(node) {
        indices.set(node, index);
        lowLinks.set(node, index);
        index++;
        stack.push(node);
        onStack.add(node);

        // Check neighbors
        for (let neighbor of graph[node]) {
            if (!indices.has(neighbor)) {
                strongConnect(neighbor);
                lowLinks.set(node, Math.min(lowLinks.get(node), lowLinks.get(neighbor)));
            } else if (onStack.has(neighbor)) {
                lowLinks.set(node, Math.min(lowLinks.get(node), indices.get(neighbor)));
            }
        }

        // If root node, pop the stack to get the strongly connected components
        if (lowLinks.get(node) === indices.get(node)) {
            let scc = [];
            let poppedNode = null;
            do {
                poppedNode = stack.pop();
                onStack.delete(poppedNode);
                scc.push(poppedNode);
            } while (poppedNode != node);
            sccList.push(scc);
        }
    }

    for (let node in graph) {
        if (!indices.has(node)) {
            strongConnect(node);
        }
    }

    return sccList;
}

// Example usage
const graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 6],
    5: [2, 6],
    6: []
};

const scc = tarjanSCC(graph);
console.log(scc);
