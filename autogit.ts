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
        this.root = new SuffixTreeNode(-1, null);
        this.text = text;
        this.buildSuffixTree();
    }

    buildSuffixTree() {
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            this.insertSuffix(i);
        }
    }

    insertSuffix(start: number) {
        let currentNode = this.root;
        let currentChar = this.text[start];

        while (true) {
            if (!currentNode.children.has(currentChar)) {
                // Create a new leaf node
                currentNode.children.set(currentChar, new SuffixTreeNode(start, null));
                break;
            } else {
                // There is an edge starting with currentChar
                const childNode = currentNode.children.get(currentChar)!;
                const edgeLength = (childNode.end === null ? this.text.length : childNode.end) - childNode.start;

                // Check how much of the edge we can match
                let j = 0;
                while (j < edgeLength && this.text[childNode.start + j] === this.text[start + j]) {
                    j++;
                }

                if (j === edgeLength) {
                    // We can go down the edge
                    currentNode = childNode;
                    currentChar = this.text[start + j];
                    start += j;
                } else {
                    // We need to split the edge
                    const splitNode = new SuffixTreeNode(childNode.start, childNode.start + j);
                    currentNode.children.set(currentChar, splitNode);
                    splitNode.children.set(this.text[childNode.start + j], childNode);
                    childNode.start += j;
                    splitNode.children.set(this.text[start + j], new SuffixTreeNode(start + j, null));
                    break;
                }
            }
        }
    }

    // Function to search for a substring
    search(substring: string): boolean {
        let currentNode = this.root;
        let i = 0;

        while (i < substring.length) {
            const char = substring[i];
            if (!currentNode.children.has(char)) {
                return false; // Not found
            }
            currentNode = currentNode.children.get(char)!;

            let edgeLength = (currentNode.end === null ? this.text.length : currentNode.end) - currentNode.start;
            let j = 0;

            while (j < edgeLength && i < substring.length && this.text[currentNode.start + j] === substring[j]) {
                j++;
                i++;
            }

            if (j < edgeLength) {
                return false; // Mismatch
            }
        }

        return true; // Found
    }
}

// Example usage
const text = "banana";
const suffixTree = new SuffixTree(text);
console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("bat")); // false
