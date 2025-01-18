interface State {
  id: string;
  neighbors: State[];
  cost: number;
  heuristic: number;
}

class BiDirectionalSearch {
  private forwardQueue: Queue<State>;
  private backwardQueue: Queue<State>;
  private forwardExplored: Set<State>;
  private backwardExplored: Set<State>;

  constructor(initialState: State, goalState: State) {
    this.forwardQueue = new Queue<State>();
    this.backwardQueue = new Queue<State>();
    this.forwardExplored = new Set<State>();
    this.backwardExplored = new Set<State>();

    this.forwardQueue.enqueue(initialState);
    this.backwardQueue.enqueue(goalState);
  }

  search(): State[] | null {
    while (!this.forwardQueue.isEmpty() && !this.backwardQueue.isEmpty()) {
      // Forward search
      const forwardState = this.forwardQueue.dequeue();
      this.forwardExplored.add(forwardState);
      for (const neighbor of forwardState.neighbors) {
        const estimatedCost = neighbor.heuristic + neighbor.cost;
        this.forwardQueue.enqueue(neighbor);
        if (this.backwardExplored.has(neighbor)) {
          // Intersection found! Construct solution path
          return this.constructSolutionPath(forwardState, neighbor);
        }
      }

      // Backward search
      const backwardState = this.backwardQueue.dequeue();
      this.backwardExplored.add(backwardState);
      for (const neighbor of backwardState.neighbors) {
        const estimatedCost = neighbor.heuristic + neighbor.cost;
        this.backwardQueue.enqueue(neighbor);
        if (this.forwardExplored.has(neighbor)) {
          // Intersection found! Construct solution path
          return this.constructSolutionPath(backwardState, neighbor);
        }
      }
    }

    // No solution found
    return null;
  }

  private constructSolutionPath(forwardState: State, backwardState: State): State[] {
    // Construct solution path by tracing back from the intersecting state
    const forwardPath = [];
    let currentState = forwardState;
    while (currentState !== this.initialState) {
      forwardPath.push(currentState);
      currentState = currentState.parent;
    }

    const backwardPath = [];
    currentState = backwardState;
    while (currentState !== this.goalState) {
      backwardPath.push(currentState);
      currentState = currentState.parent;
    }

    return [...forwardPath.reverse(), ...backwardPath];
 
