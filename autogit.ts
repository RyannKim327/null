class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;  // Starting index of the edge label
    end: number | null;  // Ending index (or null for leaf nodes)

    constructor(start: number, end: number | null) {
        this.children = new Map();
        this.start = start;
        this.end = end;
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

    insertSuffix(index: number) {
        let currentNode = this.root;
        let currentSuffix = this.text.slice(index);

        for (let char of currentSuffix) {
            if (!currentNode.children.has(char)) {
                let newNode = new SuffixTreeNode(index, null); // Leaf node
                currentNode.children.set(char, newNode);
                return;
            }
            currentNode = currentNode.children.get(char)!;
            // Move to the next character in the suffix
            index++;
        }

        // Mark the end of the suffix
        currentNode.end = index;
    }

    findAllOccurrences(pattern: string): number[] {
        const results: number[] = [];
        this._findAllOccurrences(this.root, pattern, 0, results);
        return results;
    }

    private _findAllOccurrences(node: SuffixTreeNode, pattern: string, depth: number, results: number[]) {
        if (depth === pattern.length) {
            // We've matched the entire pattern, collect all suffix indices
            this.collectLeafNodes(node, results);
            return;
        }

        const char = pattern[depth];
        if (node.children.has(char)) {
            this._findAllOccurrences(node.children.get(char)!, pattern, depth + 1, results);
        }
    }

    private collectLeafNodes(node: SuffixTreeNode, results: number[]) {
        if (node.end !== null) {
            results.push(node.end);
        }
        for (const child of node.children.values()) {
            this.collectLeafNodes(child, results);
        }
    }
}
const text = "bananas";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.findAllOccurrences("ana")); // Output indices where "ana" appears
console.log(suffixTree.findAllOccurrences("nan")); // Output indices where "nan" appears
