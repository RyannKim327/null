interface Candidate {
    sequence: string;
    score: number;
}

function beamSearch(initialSequence: string, beamWidth: number, maxIterations: number): string {
    let candidates: Candidate[] = [{ sequence: initialSequence, score: evaluate(initialSequence) }];

    for (let iteration = 0; iteration < maxIterations; iteration++) {
        let newCandidates: Candidate[] = [];

        // Generate new candidates from current candidates
        for (const candidate of candidates) {
            const nextSequences = generateNextSequences(candidate.sequence);
            for (const sequence of nextSequences) {
                const score = evaluate(sequence);
                newCandidates.push({ sequence, score });
            }
        }

        // Sort candidates by score and select top `beamWidth`
        newCandidates.sort((a, b) => b.score - a.score);
        candidates = newCandidates.slice(0, beamWidth);
    }

    // Return the best candidate from the final candidates
    candidates.sort((a, b) => b.score - a.score);
    return candidates[0].sequence;
}

function generateNextSequences(sequence: string): string[] {
    // In a real scenario, this would generate the next possible sequences.
    // For simplicity, we just return two options by adding characters.
    return [
        sequence + 'A',
        sequence + 'B',
    ];
}

function evaluate(sequence: string): number {
    // In a real scenario, this would be the actual scoring logic.
    // For simplicity, we use the length of the sequence as the score.
    return sequence.length;
}

// Example usage
const initialSequence = 'Start';
const beamWidth = 2;
const maxIterations = 5;
const bestSequence = beamSearch(initialSequence, beamWidth, maxIterations);
console.log(`Best sequence: ${bestSequence}`);
