class Node {
  constructor(id) {
    this.id = id;
    this.neighbors = [];
    this.lowLink = -1;
    this.onStack = false;
  }
}
function tarjan(graph) {
  let index = 0;
  const stack = [];
  const results = [];

  function stronglyConnect(node) {
    node.lowLink = index;
    node.onStack = true;
    index++;
    stack.push(node);

    for (const neighbor of node.neighbors) {
      if (neighbor.lowLink === -1) {
        stronglyConnect(neighbor);
        node.lowLink = Math.min(node.lowLink, neighbor.lowLink);
      } else if (neighbor.onStack) {
        node.lowLink = Math.min(node.lowLink, neighbor.lowLink);
      }
    }

    if (node.lowLink === index - 1) {
      const component = [];
      let top;
      do {
        top = stack.pop();
        top.onStack = false;
        component.push(top);
      } while (top !== node);
      
      results.push(component);
    }
  }

  for (const node of graph) {
    if (node.lowLink === -1) {
      stronglyConnect(node);
    }
  }

  return results;
}
const node0 = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node0.neighbors.push(node1);
node1.neighbors.push(node2);
node2.neighbors.push(node0);
node3.neighbors.push(node4);

const graph = [node0, node1, node2, node3, node4];
const components = tarjan(graph);
console.log(components);
