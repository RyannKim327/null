banana$
anana$
nana$
ana$
na$
a$
$
class Node {
    id: number; // Unique identifier for debugging
    edges: Map<string, Edge>; // Edges from this node
    suffixLink: Node | null; // Suffix link for Ukkonen's algorithm

    constructor(id: number) {
        this.id = id;
        this.edges = new Map();
        this.suffixLink = null;
    }
}
class Edge {
    start: number; // Start index of the substring in the original string
    end: number;   // End index of the substring
    targetNode: Node; // Target node this edge points to

    constructor(start: number, end: number, targetNode: Node) {
        this.start = start;
        this.end = end;
        this.targetNode = targetNode;
    }

    length(): number {
        return this.end - this.start + 1;
    }
}
class SuffixTree {
    root: Node;
    text: string; // The input string with a unique terminator
    activeNode: Node;
    activeEdge: number | null; // Index of the character in the active edge
    activeLength: number; // Length of the active point
    remaining: number; // Number of suffixes to insert
    lastNewNode: Node | null; // Used for setting suffix links
    nodeIdCounter: number; // Counter for assigning unique IDs to nodes

    constructor(text: string) {
        this.text = text + "$"; // Append a unique terminator
        this.root = new Node(0);
        this.activeNode = this.root;
        this.activeEdge = null;
        this.activeLength = 0;
        this.remaining = 0;
        this.lastNewNode = null;
        this.nodeIdCounter = 1;

        this.buildSuffixTree();
    }

    private buildSuffixTree() {
        for (let i = 0; i < this.text.length; i++) {
            this.extendSuffixTree(i);
        }
    }

    private extendSuffixTree(pos: number) {
        this.lastNewNode = null;
        this.remaining++;
        while (this.remaining > 0) {
            if (this.activeLength === 0) {
                this.activeEdge = pos;
            }

            const activeEdgeChar = this.activeEdge !== null ? this.text[this.activeEdge] : null;

            if (!this.activeNode.edges.has(activeEdgeChar!)) {
                const newNode = new Node(this.nodeIdCounter++);
                this.activeNode.edges.set(activeEdgeChar!, new Edge(pos, this.text.length - 1, newNode));

                if (this.lastNewNode !== null) {
                    this.lastNewNode.suffixLink = this.activeNode;
                    this.lastNewNode = null;
                }
            } else {
                const edge = this.activeNode.edges.get(activeEdgeChar!)!;
                if (this.walkDown(edge)) {
                    continue;
                }

                if (this.text[edge.start + this.activeLength] === this.text[pos]) {
                    if (this.lastNewNode !== null && this.activeNode !== this.root) {
                        this.lastNewNode.suffixLink = this.activeNode;
                        this.lastNewNode = null;
                    }
                    this.activeLength++;
                    break;
                }

                const splitEnd = edge.start + this.activeLength - 1;
                const splitNode = new Node(this.nodeIdCounter++);
                this.activeNode.edges.set(activeEdgeChar!, new Edge(edge.start, splitEnd, splitNode));

                const newNode = new Node(this.nodeIdCounter++);
                splitNode.edges.set(this.text[pos], new Edge(pos, this.text.length - 1, newNode));

                edge.start += this.activeLength;
                splitNode.edges.set(this.text[edge.start], edge);

                if (this.lastNewNode !== null) {
                    this.lastNewNode.suffixLink = splitNode;
                }
                this.lastNewNode = splitNode;
            }

            this.remaining--;
            if (this.activeNode === this.root && this.activeLength > 0) {
                this.activeLength--;
                this.activeEdge = pos - this.remaining + 1;
            } else if (this.activeNode !== this.root) {
                this.activeNode = this.activeNode.suffixLink!;
            }
        }
    }

    private walkDown(edge: Edge): boolean {
        if (this.activeLength >= edge.length()) {
            this.activeEdge! += edge.length();
            this.activeLength -= edge.length();
            this.activeNode = edge.targetNode;
            return true;
        }
        return false;
    }

    // Utility function to search for a substring
    contains(substring: string): boolean {
        let currentNode = this.root;
        let currentEdge: Edge | undefined;

        for (let i = 0; i < substring.length; i++) {
            const char = substring[i];
            currentEdge = currentNode.edges.get(char);

            if (!currentEdge) {
                return false;
            }

            const edgeSubstring = this.text.slice(currentEdge.start, currentEdge.end + 1);
            const compareLength = Math.min(edgeSubstring.length, substring.length - i);

            if (substring.slice(i, i + compareLength) !== edgeSubstring.slice(0, compareLength)) {
                return false;
            }

            i += compareLength - 1;
            currentNode = currentEdge.targetNode;
        }

        return true;
    }
}
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.contains("ana")); // true
console.log(suffixTree.contains("xyz")); // false
