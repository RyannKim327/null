function depthLimitedSearch(initialState, maxDepth, goalTest) {
  // ...
}
function depthLimitedSearch(initialState, maxDepth, goalTest) {
  const stack = [];
  // ...
}
function depthLimitedSearch(initialState, maxDepth, goalTest) {
  const stack = [];
  stack.push({ state: initialState, depth: 0 });
  // ...
}
function depthLimitedSearch(initialState, maxDepth, goalTest) {
  const stack = [];
  stack.push({ state: initialState, depth: 0 });

  while (stack.length > 0) {
    // ...
  }
}
function depthLimitedSearch(initialState, maxDepth, goalTest) {
  const stack = [];
  stack.push({ state: initialState, depth: 0 });

  while (stack.length > 0) {
    const { state, depth } = stack.pop();
    // ...
  }
}
function depthLimitedSearch(initialState, maxDepth, goalTest) {
  const stack = [];
  stack.push({ state: initialState, depth: 0 });

  while (stack.length > 0) {
    const { state, depth } = stack.pop();

    if (goalTest(state)) {
      return state;
    }

    // ...
  }
}
function depthLimitedSearch(initialState, maxDepth, goalTest) {
  const stack = [];
  stack.push({ state: initialState, depth: 0 });

  while (stack.length > 0) {
    const { state, depth } = stack.pop();

    if (goalTest(state)) {
      return state;
    }

    if (depth < maxDepth) {
      const successors = generateSuccessors(state); // Implement this function to generate the successors of the current state.

      for (const successor of successors) {
        stack.push({ state: successor, depth: depth + 1 });
      }
    }
  }

  return null; // Return null if no goal state found within the given depth.
}
