interface State {
  // define your state shape
}

type SuccessorFunction = (state: State) => State[];

function depthLimitedSearch(
  startState: State,
  goalTest: (state: State) => boolean,
  successors: SuccessorFunction,
  limit: number
): State | null {
  // Stack holds tuples: [state, depth]
  const stack: Array<[State, number]> = [];
  stack.push([startState, 0]);

  while (stack.length > 0) {
    const [currentState, depth] = stack.pop()!

    if (goalTest(currentState)) {
      return currentState; // or store path info if needed
    }
    
    if (depth < limit) {
      const nextStates = successors(currentState);
      for (const nextState of nextStates) {
        // push with incremented depth
        stack.push([nextState, depth + 1]);
      }
    }
  }
  return null; // no solution within depth limit
}
