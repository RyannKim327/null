class Node {
    constructor() {
        this.children = {};
    }
}
class SuffixTree {
    constructor() {
        this.root = new Node();
    }

    // Function to add a suffix to the suffix tree
    addSuffix(suffix) {
        let currentNode = this.root;

        for (let i = 0; i < suffix.length; i++) {
            const char = suffix[i];

            if (!currentNode.children[char]) {
                currentNode.children[char] = new Node();
            }

            currentNode = currentNode.children[char];
        }
    }
}
function buildSuffixTree(text) {
    const suffixTree = new SuffixTree();

    for (let i = 0; i < text.length; i++) {
        suffixTree.addSuffix(text.slice(i));
    }

    return suffixTree;
}
