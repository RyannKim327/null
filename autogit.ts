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

        for (let i = start; i < this.text.length; i++) {
            const char = this.text[i];

            if (!currentNode.children.has(char)) {
                const newNode = new SuffixTreeNode(start, null);
                currentNode.children.set(char, newNode);
                return;
            }

            currentNode = currentNode.children.get(char)!;
            if (currentNode.end === null) {
                currentNode.end = i;
                return;
            }

            // If we reach here, we need to split the edge
            const edgeLength = currentNode.end! - currentNode.start + 1;
            if (i - start < edgeLength) {
                // Split the edge
                const splitNode = new SuffixTreeNode(currentNode.start, currentNode.start + i - start - 1);
                currentNode.start += i - start;
                currentNode.children.set(this.text[currentNode.start], currentNode);
                currentNode.children.set(this.text[splitNode.start], splitNode);
                return;
            }
            start += edgeLength;
        }
    }

    // Function to search for a substring
    search(substring: string): boolean {
        let currentNode = this.root;
        let index = 0;

        while (index < substring.length) {
            const char = substring[index];

            if (!currentNode.children.has(char)) {
                return false; // Not found
            }

            currentNode = currentNode.children.get(char)!;
            const edgeLength = currentNode.end === null ? this.text.length - currentNode.start : currentNode.end - currentNode.start + 1;

            for (let i = 0; i < edgeLength; i++) {
                if (index >= substring.length || this.text[currentNode.start + i] !== substring[index]) {
                    return false; // Not found
                }
                index++;
            }
        }
        return true; // Found
    }
}

// Example usage
const text = "banana";
const suffixTree = new SuffixTree(text);
console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // false
