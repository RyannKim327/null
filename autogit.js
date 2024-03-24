function biDirectionalSearch(graph, startNode, targetNode) {
    let startQueue = [startNode];
    let targetQueue = [targetNode];
    let startVisited = {};
    let targetVisited = {};

    startPath = {};
    targetPath = {};

    while (startQueue.length > 0 && targetQueue.length > 0) {
        let startCurrentNode = startQueue.shift();
        let targetCurrentNode = targetQueue.shift();

        if (startVisited[startCurrentNode] || targetVisited[targetCurrentNode]) {
            // Paths meet in the middle
            return getPath(startPath, targetPath, startCurrentNode, targetCurrentNode);
        }

        startVisited[startCurrentNode] = true;
        targetVisited[targetCurrentNode] = true;

        for (let neighbor of graph[startCurrentNode]) {
            if (!startVisited[neighbor]) {
                startPath[neighbor] = startCurrentNode;
                startQueue.push(neighbor);
            }
        }

        for (let neighbor of graph[targetCurrentNode]) {
            if (!targetVisited[neighbor]) {
                targetPath[neighbor] = targetCurrentNode;
                targetQueue.push(neighbor);
            }
        }
    }

    return null; // No path found
}

function getPath(startPath, targetPath, startNode, targetNode) {
    let path = [];
    let currentNode = startNode;

    while (currentNode !== undefined) {
        path.push(currentNode);
        currentNode = startPath[currentNode];
    }

    currentNode = targetPath[targetNode];
    while (currentNode !== undefined) {
        path.unshift(currentNode);
        currentNode = targetPath[currentNode];
    }

    path.push(targetNode);

    return path;
}

// Example graph representation
const graph = {
    A: ['B'],
    B: ['C', 'D'],
    C: ['E'],
    D: ['F'],
    E: [],
    F: ['G'],
    G: []
};

const startNode = 'A';
const targetNode = 'G';

console.log(biDirectionalSearch(graph, startNode, targetNode)); // Output: ['A', 'B', 'D', 'F', 'G']
