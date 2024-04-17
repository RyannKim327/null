function depthLimitedSearch(root, goal, depthLimit) {
    let stack = [{ node: root, depth: 0 }];
    
    while(stack.length > 0) {
        let current = stack.pop();
        
        if (current.node === goal) {
            return current.node; // goal found
        }
        
        if (current.depth < depthLimit) {
            let children = current.node.getChildren(); // Assume node.getChildren() returns an array of child nodes
            
            for (let i = children.length - 1; i >= 0; i--) {
                stack.push({ node: children[i], depth: current.depth + 1 });
            }
        }
    }
    
    return null; // goal not found within depth limit
}
// Example usage
let rootNode = new Node('A');
let goalNode = new Node('C');

rootNode.addChild(new Node('B'));
rootNode.children[0].addChild(new Node('D'));
rootNode.children[0].addChild(new Node('E'));
rootNode.children[0].children[0].addChild(goalNode);

let result = depthLimitedSearch(rootNode, goalNode, 3);
console.log(result);
