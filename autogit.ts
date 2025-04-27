class SuffixTreeNode {
    children: Map<string, SuffixTreeNode> = new Map();
    start?: number; // optional, for edges
    end?: { value: number }; // to support open-ended edges
    suffixLink?: SuffixTreeNode;

    constructor(start?: number, end?: { value: number }) {
        this.start = start;
        this.end = end;
    }
}

class SuffixTree {
    private text: string;
    private root: SuffixTreeNode;

    constructor(text: string) {
        this.text = text;
        this.root = new SuffixTreeNode();
        this.buildNaively();
    }

    private buildNaively() {
        // Naively insert all suffixes
        for (let i = 0; i < this.text.length; i++) {
            this.insertSuffix(i);
        }
    }

    private insertSuffix(startIndex: number) {
        let currentNode = this.root;
        let currentPos = startIndex;

        while (currentPos < this.text.length) {
            const currentChar = this.text[currentPos];
            if (currentNode.children.has(currentChar)) {
                // Follow existing edge
                const child = currentNode.children.get(currentChar)!;
                let edgeStart = child.start!;
                let edgeEnd = child.end!.value;

                // Match as many characters as possible on the edge
                let labelPos = edgeStart;
                while (labelPos <= edgeEnd && currentPos < this.text.length && this.text[labelPos] === this.text[currentPos]) {
                    labelPos++;
                    currentPos++;
                }

                if (labelPos > edgeEnd) {
                    // Continue to next node
                    currentNode = child;
                } else {
                    // Need to split edge (not implemented here for simplicity)
                    // For a real implementation, you'd split the edge here
                    // and create new nodes accordingly.
                    return; // For now, stop
                }
            } else {
                // Create new leaf node
                const leaf = new SuffixTreeNode(currentPos, { value: this.text.length - 1 });
                currentNode.children.set(currentChar, leaf);
                break; // Inserted suffix, move to next
            }
        }
    }

    // You can add search methods here
}

// Usage:
const text = "banana$";
const suffixTree = new SuffixTree(text);
