function Node(value) {
  this.value = value;
  this.children = [];
}

function breadthLimitedSearch(root, limit) {
  let queue = [root];
  let level = 0;

  while (queue.length > 0 && level <= limit) {
    let node = queue.shift();
    console.log(`Visiting node with value ${node.value}`);

    if (level < limit) {
      for (let child of node.children) {
        queue.push(child);
      }
    }

    if (queue.length === 0) {
      level++;
      if (level <= limit) {
        console.log(`Moving to level ${level}`);
      }
    }
  }
}

// Usage example
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

root.children.push(node2, node3);
node2.children.push(node4, node5);
node3.children.push(node6);

breadthLimitedSearch(root, 2);
