class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number | null;
    suffixLink: SuffixTreeNode | null;

    constructor(start: number, end: number | null = null) {
        this.children = new Map<string, SuffixTreeNode>();
        this.start = start;
        this.end = end;
        this.suffixLink = null;
    }

    isLeaf(): boolean {
        return this.children.size === 0;
    }
}

class SuffixTree {
    private root: SuffixTreeNode;
    private text: string;
    private size: number;

    constructor(text: string) {
        this.text = text;
        this.size = text.length;
        this.root = new SuffixTreeNode(-1); // Root node has no characters
        this.build();
    }

    private build() {
        for (let i = 0; i < this.size; i++) {
            this.addSuffix(i);
        }
    }

    private addSuffix(startIndex: number) {
        let currentNode = this.root;
        const suffix = this.text.substring(startIndex);

        for (let char of suffix) {
            if (!currentNode.children.has(char)) {
                const newNode = new SuffixTreeNode(startIndex);
                currentNode.children.set(char, newNode);
            }
            currentNode = currentNode.children.get(char)!;
            // Move to the next character after this
            startIndex++;
        }
    }

    public search(pattern: string): boolean {
        let currentNode = this.root;

        for (let char of pattern) {
            if (currentNode.children.has(char)) {
                currentNode = currentNode.children.get(char)!;
            } else {
                return false; // If the character not found, pattern doesn't exist
            }
        }
        return true; // Pattern found
    }

    public printTree(node: SuffixTreeNode = this.root, prefix: string = ''): void {
        if (node.start >= 0) {
            console.log(prefix + this.text.substring(node.start, node.end !== null ? node.end : this.size));
        }
        for (let [char, child] of node.children) {
            this.printTree(child, prefix + char);
        }
    }
}

// Usage Example:

const st = new SuffixTree("bananana");
console.log(st.search("banana")); // true
console.log(st.search("nana"));   // true
console.log(st.search("nanana")); // false (not precisely the way you would due to it being a simple implementation)
st.printTree();
