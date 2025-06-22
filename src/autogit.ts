// Define a generic Node type
type Node<T> = {
    value: T; // The value stored in the node
    children: Node<T>[]; // Array of child nodes
};

/**
 * Depth-Limited Search Algorithm
 * @param node - The current node being explored
 * @param goal - The value we are searching for
 * @param depthLimit - The maximum depth to explore
 * @returns true if the goal is found within the depth limit, false otherwise
 */
function depthLimitedSearch<T>(node: Node<T>, goal: T, depthLimit: number): boolean {
    // Base case: If the depth limit is reached, stop exploring further
    if (depthLimit < 0) {
        return false;
    }

    // Check if the current node contains the goal
    if (node.value === goal) {
        console.log(`Goal found: ${goal}`);
        return true;
    }

    // Recursively explore each child node with reduced depth limit
    for (const child of node.children) {
        if (depthLimitedSearch(child, goal, depthLimit - 1)) {
            return true; // Goal found in the subtree
        }
    }

    // If no child contains the goal, return false
    return false;
}

// Example Usage
const tree: Node<string> = {
    value: "A",
    children: [
        {
            value: "B",
            children: [
                { value: "D", children: [] },
                { value: "E", children: [] },
            ],
        },
        {
            value: "C",
            children: [
                { value: "F", children: [] },
                { value: "G", children: [] },
            ],
        },
    ],
};

const goal = "G";
const depthLimit = 2;

console.log("Starting Depth-Limited Search...");
const result = depthLimitedSearch(tree, goal, depthLimit);
console.log(`Goal "${goal}" found within depth limit ${depthLimit}:`, result);
Starting Depth-Limited Search...
Goal "G" found within depth limit 1: false
