class Node {
    constructor(value, cost, path) {
        this.value = value;
        this.cost = cost;
        this.path = path;
    }
}

function beamSearch(graph, start, beamWidth) {
    let beam = [new Node(start, 0, [start])];
    let nextBeam = [];

    while (beam.length > 0) {
        for (let node of beam) {
            if (node.value in graph) {
                for (let neighbor of graph[node.value]) {
                    let newPath = node.path.concat(neighbor.value);
                    let newCost = node.cost + neighbor.cost;
                    nextBeam.push(new Node(neighbor.value, newCost, newPath));
                }
            }
        }

        nextBeam.sort((a, b) => a.cost - b.cost);
        beam = nextBeam.slice(0, beamWidth);
        nextBeam = [];
    }

    return beam;
}

// Example usage
const graph = {
    A: [{ value: 'B', cost: 1 }, { value: 'C', cost: 3 }],
    B: [{ value: 'D', cost: 2 }, { value: 'E', cost: 4 }],
    C: [{ value: 'F', cost: 1 }, { value: 'G', cost: 2 }],
    D: [{ value: 'H', cost: 3 }],
    E: [{ value: 'I', cost: 2 }],
    F: [{ value: 'J', cost: 2 }],
    G: [{ value: 'K', cost: 1 }]
};

const result = beamSearch(graph, 'A', 3);
console.log(result);
