class Node {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(text) {
        this.root = new Node();
        this.buildSuffixTree(text);
    }

    buildSuffixTree(text) {
        for (let i = 0; i < text.length; i++) {
            let currentNode = this.root;
            for (let j = i; j < text.length; j++) {
                const currentChar = text[j];
                if (!(currentChar in currentNode.children)) {
                    currentNode.children[currentChar] = new Node();
                }
                currentNode = currentNode.children[currentChar];
            }
        }
    }

    search(pattern) {
        let currentNode = this.root;
        for (let i = 0; i < pattern.length; i++) {
            const currentChar = pattern[i];
            if (!(currentChar in currentNode.children)) {
                return false;
            }
            currentNode = currentNode.children[currentChar];
        }
        return true;
    }
}

// Example usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("ana")); // Output: true
console.log(suffixTree.search("nan")); // Output: true
console.log(suffixTree.search("foo")); // Output: false
