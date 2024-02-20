class Node {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.children = {};
        this.suffixLink = null;
    }
}

class SuffixTree {
    constructor(str) {
        this.root = new Node(-1, -1);

        for (let i = 0; i < str.length; i++) {
            this.addSuffix(str.substring(i), i);
        }
    }

    addSuffix(suffix, startIndex) {
        let current = this.root;
        for (let i = 0; i < suffix.length; i++) {
            let char = suffix[i];
            if (!(char in current.children)) {
                current.children[char] = new Node(startIndex + i, startIndex); // Represent suffix by start and end indices
            }
            current = current.children[char];
        }
    }

    search(substring) {
        let current = this.root;
        for (let char of substring) {
            if (!(char in current.children)) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

// Usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("zzz")); // false
