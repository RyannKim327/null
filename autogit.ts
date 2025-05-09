class Node<K, V> {
    constructor(public key: K, public value: V, public next?: Node<K, V>) {}
}

class HashTable<K, V> {
    private table: Array<Node<K, V> | null>;
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    private hash(key: K): number {
        let hashValue = 0;
        const keyString = typeof key === 'string' ? key : JSON.stringify(key);
        for (let i = 0; i < keyString.length; i++) {
            hashValue += keyString.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    public set(key: K, value: V): void {
        const index = this.hash(key);
        let node = this.table[index];

        if (!node) {
            this.table[index] = new Node(key, value);
        } else {
            while (node) {
                if (node.key === key) {
                    node.value = value; // update existing value
                    return;
                }
                if (!node.next) {
                    node.next = new Node(key, value); // add new node at the end
                    return;
                }
                node = node.next;
            }
        }
    }

    public get(key: K): V | null {
        const index = this.hash(key);
        let node = this.table[index];

        while (node) {
            if (node.key === key) {
                return node.value;
            }
            node = node.next;
        }
        return null; // key not found
    }

    public remove(key: K): void {
        const index = this.hash(key);
        let node = this.table[index];
        let prevNode: Node<K, V> | null = null;

        while (node) {
            if (node.key === key) {
                if (prevNode) {
                    prevNode.next = node.next; // remove node
                } else {
                    this.table[index] = node.next; // remove head node
                }
                return;
            }
            prevNode = node;
            node = node.next;
        }
    }

    public display(): void {
        this.table.forEach((node, index) => {
            let output = `Index ${index}: `;
            while (node) {
                output += `{${node.key}: ${node.value}} -> `;
                node = node.next;
            }
            output += "null";
            console.log(output);
        });
    }
}

// Example Usage
const hashTable = new HashTable<string, number>(10);
hashTable.set("one", 1);
hashTable.set("two", 2);
hashTable.set("three", 3);
hashTable.display();

console.log(hashTable.get("two"));  // Output: 2
hashTable.remove("two");
hashTable.display();
