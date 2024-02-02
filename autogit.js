class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findDiameter(root) {
  let diameter = 0;

  function findHeight(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = findHeight(node.left);
    const rightHeight = findHeight(node.right);

    // update diameter if the current path has a greater sum of heights
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // return the maximum height of the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  findHeight(root);
  return diameter;
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(findDiameter(root)); // Output: 3
