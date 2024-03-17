class BeamSearch {
  constructor(beamWidth) {
    this.beamWidth = beamWidth;
  }

  search(startNode, expandFunction, goalFunction) {
    let frontier = [[startNode, 0]];
    let nextFrontier = [];

    while (frontier.length > 0) {
      frontier.forEach(([node, cost]) => {
        const children = expandFunction(node);
        children.forEach(([child, childCost]) => {
          const totalCost = cost + childCost;
          nextFrontier.push([child, totalCost]);
        });
      });

      nextFrontier.sort((a, b) => a[1] - b[1]);
      frontier = nextFrontier.slice(0, this.beamWidth);
      nextFrontier = [];

      const foundGoal = frontier.find(([node, _]) => goalFunction(node));
      if (foundGoal) {
        return foundGoal[0];
      }
    }

    return null;
  }
}

// Usage example:
const beamSearch = new BeamSearch(2);

// Define expand function
const expandFunction = (node) => {
  return [
    [node + 1, 1],
    [node + 2, 2],
  ];
};

// Define goal function
const goalFunction = (node) => {
  return node === 5;
};

const startNode = 0;
const result = beamSearch.search(startNode, expandFunction, goalFunction);
console.log(result);
