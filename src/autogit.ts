class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number;

    constructor(start: number = -1, end: number = -1) {
        this.children = new Map<string, SuffixTreeNode>();
        this.start = start; // Start index of the substring on the edge
        this.end = end;     // End index of the substring on the edge
    }

    // Length of the edge represented by this node
    getEdgeLength(): number {
        return this.end - this.start + 1;
    }
}

class SuffixTree {
    root: SuffixTreeNode;
    text: string;

    constructor(text: string) {
        this.text = text;
        this.root = new SuffixTreeNode();
        this.buildSuffixTree();
    }

    // Build the suffix tree by inserting all suffixes
    buildSuffixTree(): void {
        for (let i = 0; i < this.text.length; i++) {
            this.insertSuffix(i);
        }
    }

    // Insert a suffix starting at index `start`
    insertSuffix(start: number): void {
        let currentNode = this.root;
        let currentSuffixIndex = start;

        while (currentSuffixIndex < this.text.length) {
            const char = this.text[currentSuffixIndex];

            // Check if the current node has an edge starting with `char`
            if (currentNode.children.has(char)) {
                const childNode = currentNode.children.get(char)!;
                const edgeLength = childNode.getEdgeLength();

                // Compare the current suffix with the edge label
                let matchLength = 0;
                while (
                    matchLength < edgeLength &&
                    this.text[childNode.start + matchLength] === this.text[currentSuffixIndex + matchLength]
                ) {
                    matchLength++;
                }

                if (matchLength === edgeLength) {
                    // Full match, move to the child node
                    currentNode = childNode;
                    currentSuffixIndex += matchLength;
                } else {
                    // Partial match, split the edge
                    const newInternalNode = new SuffixTreeNode(
                        childNode.start,
                        childNode.start + matchLength - 1
                    );

                    // Update the child node's start index
                    childNode.start += matchLength;

                    // Add the new internal node and update pointers
                    newInternalNode.children.set(this.text[childNode.start], childNode);
                    currentNode.children.set(char, newInternalNode);

                    // Create a new leaf node for the remaining suffix
                    const newLeafNode = new SuffixTreeNode(currentSuffixIndex + matchLength, this.text.length - 1);
                    newInternalNode.children.set(this.text[currentSuffixIndex + matchLength], newLeafNode);
                    break;
                }
            } else {
                // No matching edge, create a new leaf node
                const newLeafNode = new SuffixTreeNode(currentSuffixIndex, this.text.length - 1);
                currentNode.children.set(char, newLeafNode);
                break;
            }
        }
    }

    // Search for a pattern in the suffix tree
    search(pattern: string): boolean {
        let currentNode = this.root;
        let patternIndex = 0;

        while (patternIndex < pattern.length) {
            const char = pattern[patternIndex];
            if (!currentNode.children.has(char)) {
                return false; // Pattern not found
            }

            const childNode = currentNode.children.get(char)!;
            const edgeLabel = this.text.substring(childNode.start, childNode.end + 1);

            let matchLength = 0;
            while (
                matchLength < edgeLabel.length &&
                patternIndex + matchLength < pattern.length &&
                edgeLabel[matchLength] === pattern[patternIndex + matchLength]
            ) {
                matchLength++;
            }

            if (matchLength === edgeLabel.length) {
                // Full match, move to the child node
                currentNode = childNode;
                patternIndex += matchLength;
            } else {
                return false; // Partial match means pattern not found
            }
        }

        return true; // Pattern fully matched
    }
}

// Example usage
const text = "banana$";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // Output: true
console.log(suffixTree.search("xyz")); // Output: false
