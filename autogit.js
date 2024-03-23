function tarjanStronglyConnectedComponents(graph) {
    const stack = [];
    const result = [];
    let index = 0;

    const recursiveTarjan = (node) => {
        node.index = index;
        node.lowLink = index;
        index++;
        stack.push(node);
        node.onStack = true;

        node.neighbors.forEach((neighbor) => {
            if (neighbor.index === undefined) {
                recursiveTarjan(neighbor);
                node.lowLink = Math.min(node.lowLink, neighbor.lowLink);
            } else if (neighbor.onStack) {
                node.lowLink = Math.min(node.lowLink, neighbor.index);
            }
        });

        if (node.lowLink === node.index) {
            const component = [];
            let popNode;
            do {
                popNode = stack.pop();
                popNode.onStack = false;
                component.push(popNode);
            } while (popNode !== node);
            result.push(component);
        }
    };

    graph.forEach((node) => {
        if (node.index === undefined) {
            recursiveTarjan(node);
        }
    });

    return result;
}
const nodeA = { neighbors: [] };
const nodeB = { neighbors: [] };
const nodeC = { neighbors: [] };

nodeA.neighbors.push(nodeB);
nodeB.neighbors.push(nodeC);
nodeC.neighbors.push(nodeA);

const graph = [nodeA, nodeB, nodeC];

const stronglyConnectedComponents = tarjanStronglyConnectedComponents(graph);
console.log(stronglyConnectedComponents);
