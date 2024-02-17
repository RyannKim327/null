class Node {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(text) {
        this.root = new Node();
        this.text = text;
        this.buildSuffixTree();
    }

    buildSuffixTree() {
        for (let i = 0; i < this.text.length; i++) {
            let suffix = this.text.substring(i);
            this.insertSuffix(suffix, i);
        }
    }

    insertSuffix(suffix, index) {
        let node = this.root;

        for (let i = 0; i < suffix.length; i++) {
            let char = suffix[i];

            if (!node.children[char]) {
                node.children[char] = new Node();
            }

            node = node.children[char];
        }

        // Store the index of the suffix in the leaf node
        node.index = index;
    }

    searchPattern(pattern) {
        let node = this.root;

        for (let i = 0; i < pattern.length; i++) {
            let char = pattern[i];

            if (node.children[char]) {
                node = node.children[char];
            } else {
                return null;
            }
        }

        return node.index;
    }
}

// Example usage
let text = "banana";
let suffixTree = new SuffixTree(text);

console.log(suffixTree.searchPattern("ana")); // Output: 1
