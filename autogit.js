class SuffixTreeNode {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(inputString) {
        this.root = new SuffixTreeNode();
        for (let i = 0; i < inputString.length; i++) {
            this.addSuffix(inputString.substring(i), i);
        }
    }

    addSuffix(suffix, index) {
        let currentNode = this.root;
        for (let i = 0; i < suffix.length; i++) {
            let char = suffix[i];
            if (!currentNode.children[char]) {
                currentNode.children[char] = new SuffixTreeNode();
            }
            currentNode = currentNode.children[char];
        }
        // Store the index of the suffix if needed
        // currentNode.index = index;
    }
}

// Example usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree);
