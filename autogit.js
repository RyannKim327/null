function Node(value) {
  this.value = value;
  this.children = [];
}

function breadthFirstSearch(startNode) {
  const queue = [startNode];
  const visited = new Set();
  
  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      console.log(currentNode.value); // Process the node (e.g., print its value)
      currentNode.children.forEach(child => {
        if (!visited.has(child)) {
          queue.push(child);
        }
      });
    }
  }
}
