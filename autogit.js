class SuffixTreeNode {
    constructor(startIndex, endIndex, parentNode) {
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.parentNode = parentNode;
        this.children = {};
    }
}
class SuffixTree {
    constructor(word) {
        this.root = new SuffixTreeNode(-1, -1, null);
        this.word = word;
        this.buildSuffixTree();
    }

    buildSuffixTree() {
        for (let i = 0; i < this.word.length; i++) {
            this.insertSuffix(i, this.root);
        }
    }

    insertSuffix(suffixIndex, parentNode) {
        if (suffixIndex >= this.word.length) {
            return;
        }
      
        const currentChar = this.word[suffixIndex];
        let node = parentNode.children[currentChar];
      
        if (!node) {
            node = new SuffixTreeNode(suffixIndex, this.word.length - 1, parentNode);
            parentNode.children[currentChar] = node;
        } 
        else {
            let j = node.startIndex;
            while (j <= node.endIndex && this.word[j] === this.word[suffixIndex]) {
                j++;
                suffixIndex++;
            }
            
            if (j <= node.endIndex) {
                const splitNode = new SuffixTreeNode(node.startIndex, j - 1, parentNode);
                node.startIndex = j;
                splitNode.children[this.word[j]] = node;
                parentNode.children[this.word[splitNode.startIndex]] = splitNode;
                node.parentNode = splitNode;
            }

            this.insertSuffix(suffixIndex, node);
        }
    }
}
const suffixTree = new SuffixTree("banana");

function printSuffixes(node, suffix) {
    if (!node) {
        return;
    }

    if (node.startIndex !== -1) {
        console.log(suffix + suffixTree.word.substring(node.startIndex, node.endIndex + 1));
        suffix += " ";
    }

    for (const child in node.children) {
        printSuffixes(node.children[child], suffix + suffixTree.word.substring(node.children[child].startIndex, node.children[child].endIndex + 1));
    }
}

printSuffixes(suffixTree.root, "");
banana
a
na
ana
n
a
