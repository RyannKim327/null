class GraphNode {
  constructor(id) {
    this.id = id;
    this.index = null;
    this.lowlink = null;
    this.onStack = false;
    this.neighbors = [];
  }
}
function tarjan(graph) {
  const components = [];
  const stack = [];
  let index = 0;

  function strongConnect(node) {
    node.index = index;
    node.lowlink = index;
    index += 1;
    stack.push(node);
    node.onStack = true;

    for (const neighbor of node.neighbors) {
      if (neighbor.index === null) {
        strongConnect(neighbor);
        node.lowlink = Math.min(node.lowlink, neighbor.lowlink);
      } else if (neighbor.onStack) {
        node.lowlink = Math.min(node.lowlink, neighbor.index);
      }
    }

    if (node.lowlink === node.index) {
      const component = [];
      let currNode = null;

      do {
        currNode = stack.pop();
        currNode.onStack = false;
        component.push(currNode);
      } while (currNode !== node);

      components.push(component);
    }
  }

  for (const node of graph) {
    if (node.index === null) {
      strongConnect(node);
    }
  }

  return components;
}
// Example usage
const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);
const node4 = new GraphNode(4);

node1.neighbors.push(node2);
node2.neighbors.push(node3);
node3.neighbors.push(node1);
node4.neighbors.push(node3);

const graph = [node1, node2, node3, node4];
const stronglyConnectedComponents = tarjan(graph);

console.log(stronglyConnectedComponents);
