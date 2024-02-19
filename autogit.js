function tarjanStronglyConnectedComponents(graph) {
    let index = 0;
    let stack = [];
    let indexes = new Map();
    let lowlinks = new Map();
    let onStack = new Set();
    let sccs = [];

    function strongConnect(node) {
        indexes.set(node, index);
        lowlinks.set(node, index);
        index++;
        stack.push(node);
        onStack.add(node);

        graph[node].forEach(neighbor => {
            if (!indexes.has(neighbor)) {
                strongConnect(neighbor);
                lowlinks.set(node, Math.min(lowlinks.get(node), lowlinks.get(neighbor)));
            } else if (onStack.has(neighbor)) {
                lowlinks.set(node, Math.min(lowlinks.get(node), indexes.get(neighbor)));
            }
        });

        if (lowlinks.get(node) === indexes.get(node)) {
            let scc = [];
            let poppedNode;
            do {
                poppedNode = stack.pop();
                onStack.delete(poppedNode);
                scc.push(poppedNode);
            } while (poppedNode !== node);
            sccs.push(scc);
        }
    }

    Object.keys(graph).forEach(node => {
        if (!indexes.has(node)) {
            strongConnect(node);
        }
    });

    return sccs;
}
const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['A', 'E'],
    D: ['C'],
    E: ['F'],
    F: ['G'],
    G: ['E', 'H'],
    H: ['I'],
    I: ['J'],
    J: ['H']
};

const sccs = tarjanStronglyConnectedComponents(graph);
console.log(sccs);
