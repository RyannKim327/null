interface Node<T> {
    state: T;               // The current state
    score: number;         // The score of the state
    parent?: Node<T>;      // The parent node for backtracking
}

type ExpandFunction<T> = (node: Node<T>) => Node<T>[]; // Function to expand a node into children

function beamSearch<T>(
    initialNode: Node<T>, 
    beamWidth: number, 
    expandFn: ExpandFunction<T>, 
    isGoalFn: (node: Node<T>) => boolean 
): Node<T> | null {
    let currentBeam: Node<T>[] = [initialNode];

    while (currentBeam.length > 0) {
        // We use an array to hold the next beam of nodes
        const nextBeam: Node<T>[] = [];

        for (const node of currentBeam) {
            // Check if we've reached a goal state
            if (isGoalFn(node)) {
                return node; // Return the found goal node
            }

            // Expand the current node and add to the next beam
            const children = expandFn(node);
            nextBeam.push(...children);
        }

        // Sort nodes in the next beam based on score and limit to beamWidth
        nextBeam.sort((a, b) => b.score - a.score); // Sort in descending order
        currentBeam = nextBeam.slice(0, beamWidth); // Include only the top beamWidth nodes
    }

    return null; // No solution found
}

// Example usage:
interface MyState {
    value: number; // Example state property
}

// Sample expand function
const expand: ExpandFunction<MyState> = (node) => {
    const children: Node<MyState>[] = [];
    // Generate some example children (you would replace this with your logic)
    for (let i = 1; i <= 3; i++) {
        const childState: MyState = { value: node.state.value + i };
        children.push({ state: childState, score: Math.random() * 100, parent: node });
    }
    return children;
};

// Sample goal function
const isGoal = (node: Node<MyState>): boolean => {
    return node.state.value >= 10; // Define a simple goal condition
};

// Initial node
const initialNode: Node<MyState> = { state: { value: 0 }, score: 0 };

// Run the beam search
const goalNode = beamSearch(initialNode, 2, expand, isGoal);
if (goalNode) {
    console.log(`Goal found with state:`, goalNode.state);
} else {
    console.log(`No solution found.`);
}
