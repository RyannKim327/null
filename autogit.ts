class Beam {
    state: string; // or any type representing the state
    score: number; // score based on your heuristic

    constructor(state: string, score: number) {
        this.state = state;
        this.score = score;
    }
}

function beamSearch(initialState: string, beamWidth: number, maxSteps: number): string {
    let beams: Beam[] = [new Beam(initialState, evaluate(initialState))];
    
    for (let step = 0; step < maxSteps; step++) {
        let newBeams: Beam[] = [];
        
        for (let beam of beams) {
            const nextStates = expand(beam.state); // Generate possible next states
            
            for (let nextState of nextStates) {
                const score = evaluate(nextState);
                newBeams.push(new Beam(nextState, score));
            }
        }
        
        // Select the top 'beamWidth' beams based on their scores
        newBeams.sort((a, b) => b.score - a.score); // Sort by score, descending
        beams = newBeams.slice(0, beamWidth); // Keep only the best beams
        
        // Optional: Check if we have a satisfactory solution
        if (isGoalState(beams[0].state)) {
            return beams[0].state;
        }
    }
    
    // Return the best solution found
    return beams[0].state;
}

// Example functions for state expansion, evaluation, and goal check
function expand(state: string): string[] {
    // Replace with your logic to generate next states
    return [`${state}A`, `${state}B`, `${state}C`];
}

function evaluate(state: string): number {
    // Replace with your logic to evaluate the state
    return Math.random(); // Random score for demonstration
}

function isGoalState(state: string): boolean {
    // Replace with your goal checking logic
    return state.length > 5; // For demonstration purposes
}

// Example usage
const initialState = "";
const result = beamSearch(initialState, 3, 10);
console.log(`Best state found: ${result}`);
