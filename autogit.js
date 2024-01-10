class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}
function bfs(root) {
  const queue = []; // Create a queue to store nodes
  const result = []; // Create an array to store the result

  queue.push(root); // Add the root node to the queue

  while (queue.length > 0) {
    const current = queue.shift(); // Take the first node from the queue

    result.push(current.value); // Add the value of the current node to the result

    // Add all the child nodes of the current node to the queue
    for (let child of current.children) {
      queue.push(child);
    }
  }

  return result;
}
const rootNode = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

rootNode.children.push(node2);
rootNode.children.push(node3);
node2.children.push(node4);
node2.children.push(node5);
const result = bfs(rootNode);
console.log(result); // Output: [1, 2, 3, 4, 5]
