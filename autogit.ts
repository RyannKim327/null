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

        for (let i = start; i < this.text.length; i++) {
            const char = this.text[i];
            if (!currentNode.children.has(char)) {
                const newNode = new SuffixTreeNode(start, null);
                currentNode.children.set(char, newNode);
                return;
            }
            currentNode = currentNode.children.get(char)!;
            // If we reach the end of the current edge, we can stop
            if (currentNode.end === null) {
                currentNode.end = i;
                return;
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
            currentNode = currentNode.children.get(char)!;
            const edgeLength = currentNode.end !== null ? currentNode.end - currentNode.start + 1 : this.text.length - currentNode.start;

            // Check if we can match the entire edge
            if (index + edgeLength <= substring.length && substring.substring(index, index + edgeLength) === this.text.substring(currentNode.start, currentNode.end !== null ? currentNode.end + 1 : this.text.length)) {
                index += edgeLength; // Move to the next part of the substring
            } else {
                return false; // Not found
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
