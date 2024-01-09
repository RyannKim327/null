class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calculateHeight(node) {
  if (node == null) return 0;
  
  const leftHeight = calculateHeight(node.left);
  const rightHeight = calculateHeight(node.right);
  
  return Math.max(leftHeight, rightHeight) + 1;
}

function calculateDiameter(root) {
  if (root == null) return 0;
  
  const queue = [root];
  let maxDiameter = 0;
  
  while (queue.length > 0) {
    const current = queue.shift();
    
    const leftHeight = calculateHeight(current.left);
    const rightHeight = calculateHeight(current.right);
    
    const currentDiameter = leftHeight + rightHeight;
    maxDiameter = Math.max(maxDiameter, currentDiameter);
    
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  
  return maxDiameter;
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(calculateDiameter(root));  // Output: 5
