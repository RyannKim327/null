class Node {
    constructor(value, cost, parent) {
        this.value = value;
        this.cost = cost;
        this.parent = parent;
    }
}

function beamSearch(start, goal, width, getAllPossibleMoves, heuristic) {
    let openSet = [new Node(start, 0, null)];
    
    while (openSet.length > 0) {
        let nextOpenSet = [];
        
        for (let node of openSet) {
            if (node.value === goal) {
                // Goal found, return the path
                let path = [];
                let current = node;
                while (current !== null) {
                    path.unshift(current.value);
                    current = current.parent;
                }
                return path;
            }
            
            let possibleMoves = getAllPossibleMoves(node.value);
            possibleMoves.forEach(move => {
                let cost = node.cost + 1; // Assuming uniform cost for simplicity
                let newNode = new Node(move, cost, node);
                
                nextOpenSet.push(newNode);
            });
        }
        
        // Sort open set based on heuristic cost
        nextOpenSet.sort((a, b) => heuristic(a) - heuristic(b));
        
        // Select the top 'width' nodes for the next iteration
        openSet = nextOpenSet.slice(0, width);
    }
    
    return null; // Goal not found
}

// Example usage
let start = 'A';
let goal = 'F';
let width = 2;
let getAllPossibleMoves = (node) => {
    // Example adjacency list representation
    let graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': ['F'],
        'E': ['F']
    };
    
    return graph[node] || [];
};

let heuristic = (node) => {
    // Example heuristic function (distance to goal)
    let distances = {
        'A': 3,
        'B': 2,
        'C': 1,
        'D': 1,
        'E': 1,
        'F': 0
    };
    
    return distances[node] || Infinity;
};

let path = beamSearch(start, goal, width, getAllPossibleMoves, heuristic);
console.log(path);
