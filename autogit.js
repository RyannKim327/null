function tarjan(graph) {
    let index = 0;
    let stack = [];
    let result = [];

    function strongconnect(node) {
        node.index = index;
        node.lowlink = index;
        index++;
        stack.push(node);
        node.onStack = true;

        for (let neighbor of graph[node]) {
            if (neighbor.index === undefined) {
                strongconnect(neighbor);
                node.lowlink = Math.min(node.lowlink, neighbor.lowlink);
            } else if (neighbor.onStack) {
                node.lowlink = Math.min(node.lowlink, neighbor.index);
            }
        }

        if (node.lowlink === node.index) {
            let component = [];
            let currentNode;
            do {
                currentNode = stack.pop();
                currentNode.onStack = false;
                component.push(currentNode);
            } while (currentNode !== node);
            result.push(component);
        }
    }

    for (let node of Object.keys(graph)) {
        if (graph[node].index === undefined) {
            strongconnect(node);
        }
    }

    return result;
}

// Example usage
let graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 6],
    5: [0],
    6: [4]
};

let components = tarjan(graph);
console.log(components);
