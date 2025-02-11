class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    suffixLink: SuffixTreeNode | null;
    start: number;
    end: number | null;

    constructor(start: number, end: number | null) {
        this.children = new Map();
        this.suffixLink = null;
        this.start = start;
        this.end = end;
    }
}
class SuffixTree {
    root: SuffixTreeNode;
    text: string;

    constructor(text: string) {
        this.root = new SuffixTreeNode(-1, -1);
        this.text = text;
        this.buildSuffixTree();
    }

    buildSuffixTree() {
        const n = this.text.length;

        // We can iterate over all suffixes of the input string
        for (let i = 0; i < n; i++) {
            this.insertSuffix(i);
        }
    }

    insertSuffix(startIndex: number) {
        let currentNode = this.root;
        let index = startIndex;

        while (index < this.text.length) {
            let char = this.text[index];
            if (!currentNode.children.has(char)) {
                // If the edge doesn't exist, create a new edge
                currentNode.children.set(char, new SuffixTreeNode(index, null));
                return;
            }

            currentNode = currentNode.children.get(char)!;
            let edgeLength = (currentNode.end !== null ? currentNode.end : this.text.length) - currentNode.start;

            // Check if we need to traverse further down this edge
            let matchLength = 0;
            while (matchLength < edgeLength && index < this.text.length &&
                   this.text[currentNode.start + matchLength] === this.text[index]) {
                matchLength++;
                index++;
            }

            if (matchLength === edgeLength) {
                // We completely traversed this edge
                // Move down the tree
                continue;
            }

            // We have a mismatch here - need to split the edge
            const existingNode = currentNode;
            const splitNode = new SuffixTreeNode(existingNode.start, existingNode.start + matchLength);
            existingNode.start += matchLength;

            // The existingNode becomes the child of the splitNode
            splitNode.children.set(this.text[existingNode.start], existingNode);
            splitNode.children.set(this.text[index], new SuffixTreeNode(index, null));

            // Replace existingNode with splitNode in parent's children
            currentNode.children.set(this.text[splitNode.start], splitNode);
            return;
        }
    }

    // You can also add methods to search for substrings
    search(substring: string): boolean {
        let currentNode = this.root;
        let index = 0;

        while (index < substring.length) {
            let char = substring[index];
            if (!currentNode.children.has(char)) {
                return false;
            }

            currentNode = currentNode.children.get(char)!;
            let edgeLength = (currentNode.end !== null ? currentNode.end : this.text.length) - currentNode.start;

            for (let i = 0; i < edgeLength && index < substring.length; i++, index++) {
                if (this.text[currentNode.start + i] !== substring[index]) {
                    return false;
                }
            }
        }

        return true;
    }
}
const text = "banana$"; // The '$' character won't appear in the actual strings; it's just a terminator.
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("ban")); // true
console.log(suffixTree.search("nana")); // true
console.log(suffixTree.search("xana")); // false
