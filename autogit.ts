type Node<T> = {
  state: T;
  score: number; // Change based on your scoring criteria
};

class BeamSearch<T> {
  private beamWidth: number;
  private scoringFunction: (state: T) => number;

  constructor(beamWidth: number, scoringFunction: (state: T) => number) {
    this.beamWidth = beamWidth;
    this.scoringFunction = scoringFunction;
  }

  public search(initialStates: T[]): Node<T>[] {
    let beams: Node<T>[] = initialStates.map(state => ({
      state,
      score: this.scoringFunction(state),
    }));

    while (!this.isFinished(beams)) {
      const nextBeams: Node<T>[] = [];

      for (const node of beams) {
        const newStates = this.expand(node.state);
        for (const state of newStates) {
          nextBeams.push({
            state,
            score: this.scoringFunction(state),
          });
        }
      }

      // Sort by score and take the top `beamWidth` candidates
      nextBeams.sort((a, b) => b.score - a.score);
      beams = nextBeams.slice(0, this.beamWidth);
    }

    return beams;
  }

  // Dummy expand function, must be implemented based on the domain
  private expand(state: T): T[] {
    // Implement your logic to generate new states
    return []; // Replace with actual expanded states
  }

  // Define your stopping condition
  private isFinished(beams: Node<T>[]): boolean {
    // Implement your stopping condition based on the problem
    return beams.length === 0; // Example condition
  }
}

// Example usage of BeamSearch with a simple scoring function
const scoringFunction = (state: string) => {
  // Implement your custom scoring logic
  return state.length; // Example: score based on length
};

const beamSearch = new BeamSearch<string>(3, scoringFunction);
const result = beamSearch.search(["initial1", "initial2", "initial3"]);
console.log(result);
