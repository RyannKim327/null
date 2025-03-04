type ScoringFunction = (item: string) => number;

// A simple function to generate a new set of candidates based on a current item
const generateCandidates = (current: string): string[] => {
    // For demonstration purposes, let's say we generate candidates by appending characters.
    const characters = ['a', 'b', 'c'];
    return characters.map(char => current + char);
};

const beamSearch = (initial: string, beamWidth: number, maxIterations: number, scoreFn: ScoringFunction): string => {
    let candidates: string[] = [initial];

    for (let i = 0; i < maxIterations; i++) {
        let scoredCandidates: { item: string, score: number }[] = candidates.map(item => ({
            item,
            score: scoreFn(item)
        }));

        // Sort by score and keep only the top 'beamWidth' candidates
        scoredCandidates.sort((a, b) => b.score - a.score); // Higher scores come first
        candidates = scoredCandidates.slice(0, beamWidth).map(candidate => candidate.item);

        // Generate new candidates from the remaining candidates
        let newCandidates: string[] = [];
        for (let candidate of candidates) {
            newCandidates = [...newCandidates, ...generateCandidates(candidate)];
        }
        candidates = newCandidates;

        // Optional: Check for termination condition. For instance, if we've reached a desirable state.
        // if (terminationConditionMet(candidates)) {
        //     return bestCandidate;
        // }
    }

    // Return the best candidate after maxIterations
    const bestCandidate = candidates.reduce((best, current) => {
        return scoreFn(current) > scoreFn(best) ? current : best;
    }, initial);

    return bestCandidate;
};

// Example scoring function (replace this with your own logic)
const exampleScoringFunction: ScoringFunction = (item: string) => {
    // For instance, let's say we score based on the length of the string
    return item.length; // Or any other scoring mechanism
};

// Running the beam search
const result = beamSearch("start", 3, 5, exampleScoringFunction);
console.log("Best result:", result);
