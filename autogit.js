class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
    for (const vertex of vertices) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(u, v) {
    this.adjList.get(u).push(v);
    this.adjList.get(v).push(u);
  }

  bfs(startNode) {
    const visited = new Set();
    const queue = [];

    visited.add(startNode);
    queue.push([startNode, null]);
    
    while (queue.length > 0) {
      const [current, parent] = queue.shift();
      
      for (const neighbor of this.adjList.get(current)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, current]);
        }
      }
    }
    
    return visited;
  }

  biDirectionalSearch(source, target) {
    const visitedFromSource = this.bfs(source);
    const visitedFromTarget = this.bfs(target);

    let intersectionNode = null;
    
    for (const node of visitedFromSource) {
      if (visitedFromTarget.has(node)) {
        intersectionNode = node;
        break;
      }
    }

    if (!intersectionNode) {
      return null;
    }

    const pathFromSource = [];
    let currentNode = intersectionNode;

    while (currentNode !== null) {
      pathFromSource.unshift(currentNode);
      currentNode = this.getParentNode(visitedFromSource, currentNode);
    }

    const pathFromTarget = [];
    currentNode = intersectionNode;

    while (currentNode !== null) {
      pathFromTarget.push(currentNode);
      currentNode = this.getParentNode(visitedFromTarget, currentNode);
    }

    return pathFromSource.concat(pathFromTarget.slice(1));
  }

  getParentNode(visited, node) {
    for (const [currentNode, parent] of visited) {
      if (currentNode === node) {
        return parent;
      }
    }
    return null;
  }
}

// Usage example
const vertices = [1, 2, 3, 4, 5, 6];
const graph = new Graph(vertices);

graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 6);
graph.addEdge(5, 6);

const source = 1;
const target = 6;
const shortestPath = graph.biDirectionalSearch(source, target);

console.log(shortestPath); // [1, 2, 4, 6]
