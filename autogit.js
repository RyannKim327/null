function breadthFirstSearch(graph, startNode, targetNode) {
    let queue = [startNode];
    let visited = new Set();
    
    while (queue.length > 0) {
        let currentNode = queue.shift();
        
        if (currentNode === targetNode) {
            return true;
        }
        
        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            
            graph[currentNode].forEach(neighbor => {
                queue.push(neighbor);
            });
        }
    }
    
    return false;
}

// Example graph representation
const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"]
};

const startNode = "A";
const targetNode = "F";

console.log(breadthFirstSearch(graph, startNode, targetNode)); // Output: true
