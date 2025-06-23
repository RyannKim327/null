class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number;

    constructor(start: number = -1, end: number = -0) {
        this.children = new Map<string, SuffixTreeNode>();
        this.start = start; // Start index of the edge label
        this.end = end;     // End index of the edge label
    }

    // Get the length of the edge label
    getEdgeLength(): number {
        return this.end - this.start;
    }
}
class SuffixTree {
    root: SuffixTreeNode;
    text: string;

    constructor(text: string) {
        this.root = new SuffixTreeNode();
        this.text = text;
        this.buildTree();
    }

    // Build the suffix tree by inserting all suffixes
    private buildTree(): void {
        for (let i = 0; i < this.text.length; i++) {
            this.insertSuffix(i);
        }
    }

    // Insert a suffix starting at index `start`
    private insertSuffix(start: number): void {
        let currentNode = this.root;
        let pos = start;

        while (pos < this.text.length) {
            const char = this.text[pos];

            if (currentNode.children.has(char)) {
                const child = currentNode.children.get(char)!;
                const edgeLength = child.getEdgeLength();

                let matchLength = 0;
                while (
                    matchLength < edgeLength &&
                    this.text[child.start + matchLength] === this.text[pos + matchLength]
                ) {
                    matchLength++;
                }

                if (matchLength === edgeLength) {
                    // Fully matched the edge, move to the child node
                    currentNode = child;
                    pos += edgeLength;
                } else {
                    // Partial match, split the edge
                    const newChild = new SuffixTreeNode(
                        child.start + matchLength,
                        child.end
                    );
                    child.end = child.start + matchLength;

                    child.children.set(this.text[newChild.start], newChild);

                    // Create a new leaf node for the remaining suffix
                    const newLeaf = new SuffixTreeNode(pos + matchLength, this.text.length);
                    child.children.set(this.text[pos + matchLength], newLeaf);
                    break;
                }
            } else {
                // No matching edge, create a new leaf node
                const newLeaf = new SuffixTreeNode(pos, this.text.length);
                currentNode.children.set(char, newLeaf);
                break;
            }
        }
    }

    // Search for a substring in the suffix tree
    public contains(substring: string): boolean {
        let currentNode = this.root;
        let pos = 0;

        while (pos < substring.length) {
            const char = substring[pos];
            if (!currentNode.children.has(char)) {
                return false;
            }

            const child = currentNode.children.get(char)!;
            const edgeLabel = this.text.slice(child.start, child.end);

            let matchLength = 0;
            while (
                matchLength < edgeLabel.length &&
                pos + matchLength < substring.length &&
                edgeLabel[matchLength] === substring[pos + matchLength]
            ) {
                matchLength++;
            }

            if (matchLength === edgeLabel.length) {
                // Fully matched the edge, move to the child node
                currentNode = child;
                pos += matchLength;
            } else {
                // Partial match or mismatch
                return false;
            }
        }

        return true;
    }
}
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.contains("ana")); // true
console.log(suffixTree.contains("xyz")); // false
console.log(suffixTree.contains("ban")); // true
console.log(suffixTree.contains("nana")); // true
