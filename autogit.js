// Suffix Tree Node definition
class Node {
    constructor() {
        this.children = {};
        this.startIndex = null;
        this.endIndex = null;
    }
}

// Suffix Tree definition
class SuffixTree {
    constructor(text) {
        this.root = new Node();
        this.text = text;
        this.buildSuffixTree();
    }

    buildSuffixTree() {
        for (let i = 0; i < this.text.length; i++) {
            this.addSuffix(this.text.substring(i));
        }
    }

    addSuffix(suffix) {
        let currentNode = this.root;

        for (let i = 0; i < suffix.length; i++) {
            const currentChar = suffix[i];
            if (!(currentChar in currentNode.children)) {
                currentNode.children[currentChar] = new Node();
                currentNode.children[currentChar].startIndex = this.text.indexOf(suffix.substring(i));
                currentNode.children[currentChar].endIndex = this.text.indexOf(suffix);
                return;
            } else {
                let childNode = currentNode.children[currentChar];
                let j = 0;

                while (j < suffix.length && j < this.text.length) {
                    if (this.text[childNode.startIndex + j] !== suffix[j]) {
                        // Split the current node
                        const newNode = new Node();
                        newNode.startIndex = childNode.startIndex + j;
                        newNode.endIndex = childNode.endIndex;

                        // Update the child node
                        childNode.endIndex = childNode.startIndex + j - 1;

                        // Add the new node as a child
                        childNode.children[this.text[newNode.startIndex]] = newNode;

                        // Create a new child for the current character
                        const newChild = new Node();
                        newChild.startIndex = this.text.indexOf(suffix.substring(i + j));
                        newChild.endIndex = this.text.indexOf(suffix);
                        newNode.children[this.text[newChild.startIndex]] = newChild;

                        return;
                    }

                    j++;
                }

                if (j === suffix.length && j < this.text.length) {
                    // Continue traversal
                    currentNode = childNode;
                } else if (j < suffix.length && j === this.text.length) {
                    // Add the remaining characters as children
                    const newChild = new Node();
                    newChild.startIndex = this.text.indexOf(suffix.substring(i + j));
                    newChild.endIndex = this.text.indexOf(suffix);
                    childNode.children[this.text[newChild.startIndex]] = newChild;
                    return;
                }
            }
        }
    }
}

// Test the Suffix Tree
const suffixTree = new SuffixTree("banana");

console.log(suffixTree.root.children); // Output the root node's children
