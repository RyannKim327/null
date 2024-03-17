function biDirectionalSearch(start, end, graph) {
    let startQueue = [start];
    let endQueue = [end];
    let startVisited = new Set();
    let endVisited = new Set();
    
    startVisited.add(start);
    endVisited.add(end);
    
    while (startQueue.length && endQueue.length) {
        let startNode = startQueue.shift();
        let endNode = endQueue.shift();
        
        if (startVisited.has(endNode) || endVisited.has(startNode)) {
            return true; // Paths meet
        }
        
        for (let neighbor of graph[startNode]) {
            if (!startVisited.has(neighbor)) {
                startVisited.add(neighbor);
                startQueue.push(neighbor);
            }
        }
        
        for (let neighbor of graph[endNode]) {
            if (!endVisited.has(neighbor)) {
                endVisited.add(neighbor);
                endQueue.push(neighbor);
            }
        }
    }
    
    return false; // Paths do not meet
}

// Example graph representation as an adjacency list
const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 5],
    3: [1],
    4: [1],
    5: [2]
};

const startNode = 0;
const endNode = 5;

if (biDirectionalSearch(startNode, endNode, graph)) {
    console.log("Paths meet");
} else {
    console.log("Paths do not meet");
}
