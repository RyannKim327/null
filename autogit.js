function depthLimitedSearch(node, goal, depthLimit) {
    return recursiveDLS(node, goal, depthLimit, 0);
}

function recursiveDLS(node, goal, depthLimit, depth) {
    if (depth > depthLimit) {
        return "cutoff";
    }

    if (node === goal) {
        return node;
    }

    if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
            const result = recursiveDLS(node.children[i], goal, depthLimit, depth + 1);
            if (result === "cutoff") {
                return "cutoff";
            } else if (result !== "failure") {
                return result;
            }
        }
    }

    return "failure";
}

// Example usage
const rootNode = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 3
                },
                {
                    value: 4
                }
            ]
        },
        {
            value: 5,
            children: [
                {
                    value: 6
                },
                {
                    value: 7
                }
            ]
        }
    ]
};

const goalNode = { value: 6 };

const result = depthLimitedSearch(rootNode, goalNode, 2);
console.log(result);
