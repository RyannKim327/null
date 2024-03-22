function beamSearch(startNode, beamWidth, maxDepth, getSuccessors, isGoal) {
    let currentLevel = [startNode];
    let nextLevel = [];

    for (let i = 0; i < maxDepth; i++) {
        for (let node of currentLevel) {
            let successors = getSuccessors(node);

            for (let successor of successors) {
                if (isGoal(successor)) {
                    return successor;
                }

                nextLevel.push(successor);
            }
        }

        nextLevel.sort((a, b) => heuristic(b) - heuristic(a));
        currentLevel = nextLevel.slice(0, beamWidth);
        nextLevel = [];
    }

    return null;
}

// Example usage
let startNode = { value: 0 };
let beamWidth = 2;
let maxDepth = 3;

function getSuccessors(node) {
    // Generate successors of the current node
    return [{ value: node.value + 1 }, { value: node.value - 1 }];
}

function isGoal(node) {
    // Check if the node is the goal node
    return node.value === 5;
}

function heuristic(node) {
    // Define a heuristic function to determine the priority of the nodes
    return Math.abs(node.value - 5);
}

let result = beamSearch(startNode, beamWidth, maxDepth, getSuccessors, isGoal);
console.log(result);
