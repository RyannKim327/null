class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findDiameter(root) {
  let result = 0;

  function height(node) {
    if (node === null) return 0;

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // update result if current path is longest
    result = Math.max(result, leftHeight + rightHeight + 1);

    // return the height of the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  height(root);

  return result;
}
// Create a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const diameter = findDiameter(root);
console.log(diameter); // Output: 5
