class SuffixTreeNode {
    children: Map<string, SuffixTreeNode> = new Map();
    start?: number;
    end?: { value: number };  // Using object for shared reference
    suffixLink?: SuffixTreeNode;

    constructor(start?: number, end?: { value: number }) {
        this.start = start;
        this.end = end;
        this.suffixLink = undefined;
    }

    edgeLength(currentPosition: number): number {
        return (this.end?.value ?? currentPosition) - (this.start ?? 0) + 1;
    }
}

class SuffixTree {
    private text: string;
    private root: SuffixTreeNode;
    private activeNode: SuffixTreeNode;
    private activeEdge: number = -1;
    private activeLength: number = 0;
    private remainingSuffixCount: number = 0;
    private lastNewNode?: SuffixTreeNode;
    private leafEnd: { value: number } = { value: -1 };

    constructor(text: string) {
        this.text = text;
        this.root = new SuffixTreeNode();
        this.activeNode = this.root;
        this.build();
    }

    private build() {
        for (let i = 0; i < this.text.length; i++) {
            this.extendSuffixTree(i);
        }
    }

    private extendSuffixTree(pos: number) {
        this.leafEnd.value = pos;
        this.remainingSuffixCount++;
        this.lastNewNode = undefined;

        while (this.remainingSuffixCount > 0) {
            if (this.activeLength === 0) this.activeEdge = pos;

            const currentChar = this.text[this.activeEdge];

            if (!this.activeNode.children.has(currentChar)) {
                // New leaf edge
                const leafNode = new SuffixTreeNode(pos, this.leafEnd);
                this.activeNode.children.set(currentChar, leafNode);

                if (this.lastNewNode !== undefined) {
                    this.lastNewNode.suffixLink = this.activeNode;
                    this.lastNewNode = undefined;
                }

            } else {
                const nextNode = this.activeNode.children.get(currentChar)!;
                const edgeLength = nextNode.edgeLength(pos);
                if (this.activeLength >= edgeLength) {
                    this.activeEdge += edgeLength;
                    this.activeLength -= edgeLength;
                    this.activeNode = nextNode;
                    continue;
                }

                if (this.text[nextNode.start! + this.activeLength] === this.text[pos]) {
                    // Next character matches, just increment activeLength
                    if (this.lastNewNode !== undefined && this.activeNode !== this.root) {
                        this.lastNewNode.suffixLink = this.activeNode;
                        this.lastNewNode = undefined;
                    }
                    this.activeLength++;
                    break;
                }

                // Split edge
                const splitEnd = { value: nextNode.start! + this.activeLength - 1 };
                const splitNode = new SuffixTreeNode(nextNode.start, splitEnd);
                this.activeNode.children.set(currentChar, splitNode);
                const leafNode = new SuffixTreeNode(pos, this.leafEnd);
                splitNode.children.set(this.text[pos], leafNode);
                nextNode.start = splitEnd.value + 1;
                splitNode.children.set(this.text[nextNode.start], nextNode);

                if (this.lastNewNode !== undefined) {
                    this.lastNewNode.suffixLink = splitNode;
                }
                this.lastNewNode = splitNode;
            }

            this.remainingSuffixCount--;

            if (this.activeNode === this.root && this.activeLength > 0) {
                this.activeLength--;
                this.activeEdge = pos - this.remainingSuffixCount + 1;
            } else if (this.activeNode !== this.root) {
                this.activeNode = this.activeNode.suffixLink ?? this.root;
            }
        }
    }

    // Additional methods for searching, visualization, etc. could be added here
}

// Usage:
const myText = "banana$";
const suffixTree = new SuffixTree(myText);
