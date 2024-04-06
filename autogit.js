function tarjanStronglyConnectedComponents(graph) {
    let index = 0;
    let stack = [];
    let onStack = new Set();
    let indexMap = new Map();
    let lowLinkMap = new Map();
    let result = [];

    function strongConnect(node) {
        indexMap.set(node, index);
        lowLinkMap.set(node, index);
        index++;
        stack.push(node);
        onStack.add(node);

        for (let neighbor of graph[node]) {
            if (!indexMap.has(neighbor)) {
                strongConnect(neighbor);
                lowLinkMap.set(
                    node,
                    Math.min(lowLinkMap.get(node), lowLinkMap.get(neighbor))
                );
            } else if (onStack.has(neighbor)) {
                lowLinkMap.set(
                    node,
                    Math.min(lowLinkMap.get(node), indexMap.get(neighbor))
                );
            }
        }

        if (indexMap.get(node) === lowLinkMap.get(node)) {
            let component = [];
            let popNode = stack.pop();
            onStack.delete(popNode);
            component.push(popNode);
            
            while (popNode !== node) {
                popNode = stack.pop();
                onStack.delete(popNode);
                component.push(popNode);
            }

            result.push(component);
        }
    }

    for (let node in graph) {
        if (!indexMap.has(node)) {
            strongConnect(node);
        }
    }

    return result;
}

// Example graph representation using adjacency list
const graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 6],
    5: [0],
    6: [4]
};

const scc = tarjanStronglyConnectedComponents(graph);
console.log(scc);
