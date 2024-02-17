class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

function breadthLimitedSearch(root, limit) {
    let queue = [root];
    let visited = [];
    
    while (queue.length > 0 && limit > 0) {
        let current = queue.shift();
        visited.push(current.value);
        
        if (current.children) {
            queue.push(...current.children);
        }
        
        limit--;
    }
    
    return visited;
}

// Example tree structure
let tree = new Node(1, [
    new Node(2, [new Node(4), new Node(5)]),
    new Node(3, [new Node(6), new Node(7)])
]);

let result = breadthLimitedSearch(tree, 2);
console.log(result); // Output: [1, 2, 3]
