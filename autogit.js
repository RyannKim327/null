class Node {
    constructor() {
        this.children = {};
    }
}
class SuffixTree {
    constructor(str) {
        this.root = new Node();
        for (let i = 0; i < str.length; i++) {
            this.addSuffix(str.substring(i));
        }
    }

    addSuffix(suffix) {
        let current = this.root;
        for (let i = 0; i < suffix.length; i++) {
            let char = suffix[i];
            if (!(char in current.children)) {
                current.children[char] = new Node();
            }
            current = current.children[char];
        }
    }
}
let inputString = "banana";
let suffixTree = new SuffixTree(inputString);
