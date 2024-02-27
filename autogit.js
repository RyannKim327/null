function depthLimitedSearch(node, goal, limit) {
    if (node.state === goal) {
        return node;
    } else if (limit === 0) {
        return 'cutoff';
    } else {
        let cutoffOccurred = false;

        for (let child of node.children) {
            let result = depthLimitedSearch(child, goal, limit - 1);

            if (result === 'cutoff') {
                cutoffOccurred = true;
            } else if (result !== 'failure') {
                return result;
            }
        }

        return cutoffOccurred ? 'cutoff' : 'failure';
    }
}

// Example usage
class Node {
    constructor(state, children) {
        this.state = state;
        this.children = children;
    }
}

// Sample tree structure
let child1 = new Node('B', []);
let child2 = new Node('C', []);
let child3 = new Node('D', []);
let child4 = new Node('E', []);
let child5 = new Node('F', []);
let child6 = new Node('G', []);
let child7 = new Node('H', []);

let root = new Node('A', [child1, child2, child3, child4]);
child1.children = [child5, child6];
child2.children = [child7];

let goalNode = depthLimitedSearch(root, 'H', 3);
console.log(goalNode);
