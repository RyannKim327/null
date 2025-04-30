type Edge = {
    start: number;
    end: number;
    childNodes: Map<string, Node>;
};

type Node = {
    edges: Map<string, Edge>;
};

class SuffixTree {
    root: Node;
    text: string;

    constructor(text: string) {
        this.root = { edges: new Map() };
        this.text = text;
        this.buildSuffixTree();
    }

    private buildSuffixTree() {
        const n = this.text.length;
        for (let i = 0; i < n; i++) {
            this.insertSuffix(i);
        }
    }

    private insertSuffix(startIndex: number) {
        let currentNode = this.root;
        let suffix = this.text.substring(startIndex);

        for (let char of suffix) {
            if (!currentNode.edges.has(char)) {
                // Create a new edge if it doesn't exist
                currentNode.edges.set(char, {
                    start: startIndex,
                    end: this.text.length - 1,
                    childNodes: new Map()
                });
            }
            // Move to the edge that matches the current character
            currentNode = currentNode.edges.get(char)!; // non-null because we've just checked
            startIndex++;
        }
    }

    public search(pattern: string): boolean {
        let currentNode = this.root;
        let index = 0;

        while (index < pattern.length) {
            const char = pattern[index];
            if (!currentNode.edges.has(char)) {
                return false; // Not found
            }
            currentNode = currentNode.edges.get(char)!;
            index++;
        }

        return true; // Found
    }
}

// Example Usage
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("nan")); // true
console.log(suffixTree.search("ba")); // true
console.log(suffixTree.search("cat")); // false
