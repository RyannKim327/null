class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number | null;
    suffixLink: SuffixTreeNode | null;

    constructor(start: number, end: number | null) {
        this.children = new Map();
        this.start = start;
        this.end = end;
        this.suffixLink = null;
    }
}

class SuffixTree {
    root: SuffixTreeNode;
    text: string;

    constructor(text: string) {
        this.text = text;
        this.root = new SuffixTreeNode(-1, null);
        this.buildSuffixTree();
    }

    buildSuffixTree() {
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            this.addSuffix(i);
        }
    }

    addSuffix(start: number) {
        let currentNode = this.root;
        let currentChar = this.text[start];

        while (true) {
            if (!currentNode.children.has(currentChar)) {
                // Create a new leaf node
                currentNode.children.set(currentChar, new SuffixTreeNode(start, null));
                break;
            } else {
                // There is an edge starting with currentChar
                let childNode = currentNode.children.get(currentChar)!;
                let edgeLength = (childNode.end === null ? this.text.length : childNode.end) - childNode.start;

                // Check how much of the edge we can match
                let matchLength = 0;
                while (matchLength < edgeLength && this.text[childNode.start + matchLength] === this.text[start + matchLength]) {
                    matchLength++;
                }

                if (matchLength === edgeLength) {
                    // We can go down the edge
                    currentNode = childNode;
                    currentChar = this.text[start + matchLength];
                    start += matchLength;
                } else {
                    // We need to split the edge
                    const splitNode = new SuffixTreeNode(childNode.start, childNode.start + matchLength);
                    currentNode.children.set(currentChar, splitNode);
                    splitNode.children.set(this.text[childNode.start + matchLength], childNode);
                    childNode.start += matchLength;
                    childNode.end = childNode.start + (childNode.end === null ? this.text.length : childNode.end);
                    splitNode.children.set(this.text[start + matchLength], new SuffixTreeNode(start + matchLength, null));
                    break;
                }
            }
        }
    }

    // Function to search for a substring in the suffix tree
    search(substring: string): boolean {
        let currentNode = this.root;
        let index = 0;

        while (index < substring.length) {
            const char = substring[index];
            if (!currentNode.children.has(char)) {
                return false; // Not found
            }
            const childNode = currentNode.children.get(char)!;
            const edgeLength = (childNode.end === null ? this.text.length : childNode.end) - childNode.start;

            let matchLength = 0;
            while (matchLength < edgeLength && index < substring.length && this.text[childNode.start + matchLength] === substring[index]) {
                matchLength++;
                index++;
            }

            if (matchLength < edgeLength) {
                return false; // Not found
            }

            currentNode = childNode;
        }

        return true; // Found
    }
}

// Example usage
const text = "banana";
const suffixTree = new SuffixTree(text);
console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("band")); // false
