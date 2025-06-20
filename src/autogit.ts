class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number | null; // `null` indicates an open-ended interval for active leaves

    constructor(start: number, end: number | null = null) {
        this.children = new Map();
        this.start = start;
        this.end = end;
    }

    // Returns the length of the substring represented by this node
    getEdgeLength(): number {
        return (this.end === null ? -1 : this.end) - this.start + 1;
    }
}

class SuffixTree {
    root: SuffixTreeNode;
    text: string;

    constructor(text: string) {
        this.root = new SuffixTreeNode(-1); // Root node has no associated substring
        this.text = text;
        this.buildSuffixTree();
    }

    // Build the suffix tree by inserting all suffixes
    private buildSuffixTree(): void {
        for (let i = 0; i < this.text.length; i++) {
            this.insertSuffix(i);
        }
    }

    // Insert a suffix starting at index `startIdx`
    private insertSuffix(startIdx: number): void {
        let currentNode = this.root;
        let currentSuffixStart = startIdx;

        while (currentSuffixStart < this.text.length) {
            const char = this.text[currentSuffixStart];

            // Check if the current node has a child with the character
            if (currentNode.children.has(char)) {
                const child = currentNode.children.get(char)!;
                const edgeLength = child.getEdgeLength();

                // Compare the suffix with the edge label
                let matchLength = 0;
                while (
                    matchLength < edgeLength &&
                    this.text[child.start + matchLength] === this.text[currentSuffixStart + matchLength]
                ) {
                    matchLength++;
                }

                if (matchLength === edgeLength) {
                    // Fully matched the edge, move to the child node
                    currentNode = child;
                    currentSuffixStart += edgeLength;
                } else {
                    // Partial match, split the edge
                    const newInternalNode = new SuffixTreeNode(child.start, child.start + matchLength - 1);

                    // Update the child node's start index
                    child.start += matchLength;

                    // Add the remainder as a new child
                    const newLeafNode = new SuffixTreeNode(currentSuffixStart + matchLength, null);

                    newInternalNode.children.set(this.text[newLeafNode.start], newLeafNode);
                    newInternalNode.children.set(this.text[child.start], child);

                    // Replace the old child with the new internal node
                    currentNode.children.set(char, newInternalNode);
                    break;
                }
            } else {
                // No matching child, create a new leaf node
                const newLeafNode = new SuffixTreeNode(currentSuffixStart, null);
                currentNode.children.set(char, newLeafNode);
                break;
            }
        }
    }

    // Search for a substring in the suffix tree
    search(pattern: string): boolean {
        let currentNode = this.root;
        let patternIndex = 0;

        while (patternIndex < pattern.length) {
            const char = pattern[patternIndex];
            if (!currentNode.children.has(char)) {
                return false; // Pattern not found
            }

            const child = currentNode.children.get(char)!;
            const edgeLength = child.getEdgeLength();

            // Compare the pattern with the edge label
            let matchLength = 0;
            while (
                matchLength < edgeLength &&
                patternIndex + matchLength < pattern.length &&
                this.text[child.start + matchLength] === pattern[patternIndex + matchLength]
            ) {
                matchLength++;
            }

            if (matchLength === edgeLength) {
                // Fully matched the edge, move to the child node
                currentNode = child;
                patternIndex += matchLength;
            } else {
                return false; // Partial match means the pattern is not present
            }
        }

        return true; // Entire pattern matched
    }
}

// Example usage
const text = "banana$";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("ban")); // true
console.log(suffixTree.search("xyz")); // false
