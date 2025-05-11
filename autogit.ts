class SuffixTreeNode {
    // edges map: character -> child node
    edges: Map<string, SuffixTreeEdge> = new Map();
}

class SuffixTreeEdge {
    start: number;   // start index of substring in the text
    end: number;     // end index (exclusive) of substring in the text
    node: SuffixTreeNode;

    constructor(start: number, end: number, node: SuffixTreeNode) {
        this.start = start;
        this.end = end;
        this.node = node;
    }

    length() {
        return this.end - this.start;
    }
}

class SuffixTree {
    root: SuffixTreeNode = new SuffixTreeNode();
    text: string;

    constructor(text: string) {
        this.text = text + '$';  // Append unique sentinel to guarantee suffixes
        this.build();
    }

    build() {
        // Naive approach: insert all suffixes one by one.
        for (let i = 0; i < this.text.length; i++) {
            this.insertSuffix(i);
        }
    }

    insertSuffix(pos: number) {
        let currentNode = this.root;
        let currentIndex = pos;

        while (currentIndex < this.text.length) {
            const currentChar = this.text[currentIndex];
            const edge = currentNode.edges.get(currentChar);

            if (!edge) {
                // No edge starting with this character, create a new leaf edge
                const leaf = new SuffixTreeNode();
                currentNode.edges.set(currentChar, new SuffixTreeEdge(currentIndex, this.text.length, leaf));
                return;
            }

            // Walk along the edge comparing characters
            const length = edge.length();
            let labelIndex = edge.start;
            let i = 0;
            while (i < length && this.text[labelIndex] === this.text[currentIndex]) {
                labelIndex++;
                currentIndex++;
                i++;
            }

            if (i === length) {
                // Entire edge matches, move to child node
                currentNode = edge.node;
            } else {
                // Mismatch found, need to split edge

                // Create a new internal node
                const newNode = new SuffixTreeNode();

                // Old edge: from split point
                const oldEdge = new SuffixTreeEdge(edge.start + i, edge.end, edge.node);

                // Update existing edge to point to new internal node
                edge.end = edge.start + i;
                edge.node = newNode;

                // Add old edge as child of new node
                newNode.edges.set(this.text[oldEdge.start], oldEdge);

                // Add new leaf edge for the remainder of the suffix
                const leaf = new SuffixTreeNode();
                newNode.edges.set(this.text[currentIndex], new SuffixTreeEdge(currentIndex, this.text.length, leaf));
                return;
            }
        }
    }

    // A helper function to check if a substring exists in the tree
    contains(substring: string): boolean {
        let currentNode = this.root;
        let i = 0;

        while (i < substring.length) {
            const edge = currentNode.edges.get(substring[i]);
            if (!edge) return false;

            const edgeLength = edge.length();
            let labelIndex = edge.start;
            let j = 0;

            while (j < edgeLength && i < substring.length) {
                if (this.text[labelIndex] !== substring[i]) {
                    return false;
                }
                labelIndex++;
                i++;
                j++;
            }

            currentNode = edge.node;
        }

        return true;
    }
}

// Example usage
const tree = new SuffixTree("banana");
console.log(tree.contains("ana")); // true
console.log(tree.contains("nana")); // true
console.log(tree.contains("apple")); // false
