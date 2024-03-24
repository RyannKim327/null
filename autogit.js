class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function breadthLimitedSearch(root, limit) {
  let queue = [root];

  while (queue.length > 0 && limit >= 0) {
    let currentNode = queue.shift();

    if (currentNode.value === "goal") {
      return currentNode;
    }

    if (currentNode.children) {
      for (let child of currentNode.children) {
        queue.push(child);
      }
    }

    limit--;
  }

  return null; // Goal not found within the limit
}

// Example Usage
let tree = new Node("A", [
  new Node("B", [
    new Node("D", [new Node("G")]),
    new Node("E"),
  ]),
  new Node("C", [
    new Node("F", [new Node("H")]),
  ]),
]);

let result = breadthLimitedSearch(tree, 3);
console.log(result);
