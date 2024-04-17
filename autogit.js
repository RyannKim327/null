class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function depthLimitedSearch(root, limit) {
    const stack = [{ node: root, depth: 0 }];
    
    while (stack.length > 0) {
        const { node, depth } = stack.pop();
        
        if (depth <= limit) {
            console.log(node.value); // Output the value of the current node
            
            // Add child nodes to the stack
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }
}

// Example usage
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

root.children.push(node2, node3);
node2.children.push(new Node(5), new Node(6));
node3.children.push(new Node(7));
node4.children.push(new Node(8));

depthLimitedSearch(root, 2); // Perform depth-limited search with limit 2 starting from root
