// Function to perform Tarjan's algorithm for finding strongly connected components
function tarjanSCC(graph) {
    // Initialize variables
    let index = 0;
    let stack = [];
    let indices = {};
    let lowlinks = {};
    let onStack = {};
    let result = [];

    // Helper function to perform depth-first search
    function strongConnect(node) {
        indices[node] = index;
        lowlinks[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        for (let neighbor of graph[node]) {
            if (indices[neighbor] === undefined) {
                strongConnect(neighbor);
                lowlinks[node] = Math.min(lowlinks[node], lowlinks[neighbor]);
            } else if (onStack[neighbor]) {
                lowlinks[node] = Math.min(lowlinks[node], indices[neighbor]);
            }
        }

        if (lowlinks[node] === indices[node]) {
            let component = [];
            let member;
            do {
                member = stack.pop();
                onStack[member] = false;
                component.push(member);
            } while (member !== node);
            result.push(component);
        }
    }

    // Perform Tarjan's algorithm for each node in the graph
    for (let node in graph) {
        if (indices[node] === undefined) {
            strongConnect(node);
        }
    }

    return result;
}

// Example graph
const graph = {
    1: [2],
    2: [3, 4],
    3: [1],
    4: [5],
    5: [2, 6],
    6: [5]
};

// Find strongly connected components using Tarjan's algorithm
const scc = tarjanSCC(graph);
console.log(scc);
