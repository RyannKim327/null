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
            // If the current node has an end, we need to check the next character
            if (currentNode.end !== null) {
                // If we reach the end of the current node, we can continue
                if (currentNode.end < this.text.length - 1) {
                    // Move to the next character
                    currentNode = currentNode.children.get(this.text[currentNode.end + 1])!;
                }
            }
        }

        // Mark the end of the suffix
        currentNode.end = this.text.length - 1;
    }

    search(pattern: string): boolean {
        let currentNode = this.root;
        let index = 0;

        while (index < pattern.length) {
            const char = pattern[index];

            if (!currentNode.children.has(char)) {
                return false; // Not found
            }

            currentNode = currentNode.children.get(char)!;
            let edgeLength = currentNode.end !== null ? currentNode.end - currentNode.start + 1 : 0;

            // Check if we can match the entire edge
            if (edgeLength > 0) {
                for (let i = 0; i < edgeLength; i++) {
                    if (this.text[currentNode.start + i] !== pattern[index]) {
                        return false; // Mismatch
                    }
                    index++;
                    if (index >= pattern.length) {
                        return true; // Found the pattern
                    }
                }
            }
        }

        return true; // Found the pattern
    }
}

// Example usage:
const text = "banana";
const suffixTree = new SuffixTree(text);
console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // false
