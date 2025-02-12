class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number | null; // Null means that it goes to the end of the string

    constructor(start: number, end: number | null) {
        this.children = new Map();
        this.start = start;
        this.end = end;
    }

    isEnd() {
        return this.end === null;
    }

    length(text: string): number {
        if (this.end === null) {
            return text.length - this.start;
        }
        return this.end - this.start;
    }
}

class SuffixTree {
    root: SuffixTreeNode;
    text: string;

    constructor(text: string) {
        this.text = text;
        this.root = new SuffixTreeNode(0, null);
        this.buildSuffixTree();
    }

    buildSuffixTree() {
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            this.insertSuffix(i);
        }
    }

    insertSuffix(startIndex: number) {
        let currentNode = this.root;
        let index = startIndex;

        while (index < this.text.length) {
            const currentChar = this.text[index];
            if (!currentNode.children.has(currentChar)) {
                const newLeaf = new SuffixTreeNode(index, null);
                currentNode.children.set(currentChar, newLeaf);
                break;
            } else {
                const childNode = currentNode.children.get(currentChar)!;
                const edgeLength = childNode.length(this.text);
                let i = 0;

                // Walk down the edge until we either match or reach the end
                while (i < edgeLength && index + i < this.text.length &&
                    this.text[childNode.start + i] === this.text[index + i]) {
                    i++;
                }

                if (i === edgeLength) {
                    // We completely matched the child's edge
                    currentNode = childNode;
                    index += i; // Move to the next character in the suffix
                } else {
                    // Split the edge
                    const oldEnd = childNode.end;
                    const splitNode = new SuffixTreeNode(childNode.start, childNode.start + i);
                    currentNode.children.set(currentChar, splitNode);
                    splitNode.children.set(this.text[childNode.start + i], childNode);
                    childNode.start += i; // Move the existing child node
                    childNode.end = oldEnd;

                    // Add the new leaf
                    const newLeaf = new SuffixTreeNode(index, null);
                    splitNode.children.set(this.text[index], newLeaf);
                    break;
                }
            }
        }
    }

    // For debugging and visualization purposes
    display(node: SuffixTreeNode = this.root, text: string = this.text): void {
        for (const [key, childNode] of node.children) {
            const edgeString = text.substring(childNode.start, childNode.end ?? text.length);
            console.log(`${edgeString}`);
            childNode.display(childNode, text);
        }
    }
}

// Example usage
const text = "banana";
const suffixTree = new SuffixTree(text);
suffixTree.display();
