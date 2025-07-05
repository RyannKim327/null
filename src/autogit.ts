type Entry<K, V> = {
  key: K;
  value: V;
  next?: Entry<K, V>;
};

class HashTable<K, V> {
  private buckets: Array<Entry<K, V> | undefined>;
  private size: number;

  constructor(private capacity: number = 16) {
    this.buckets = new Array(capacity);
    this.size = 0;
  }

  // Hash function to compute index
  private hash(key: K): number {
    const stringKey = String(key);
    let hash = 0;
    for (let i = 0; i < stringKey.length; i++) {
      hash = (hash * 31 + stringKey.charCodeAt(i)) >>> 0; // Unsigned right shift
    }
    return hash % this.capacity;
  }

  // Insert or update a key-value pair
  public set(key: K, value: V): void {
    const index = this.hash(key);
    let head = this.buckets[index];

    // Check if key exists and update
    let current = head;
    while (current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      current = current.next;
    }

    // Insert new entry at the beginning
    const newEntry: Entry<K, V> = { key, value, next: head };
    this.buckets[index] = newEntry;
    this.size++;
  }

  // Retrieve value by key
  public get(key: K): V | undefined {
    const index = this.hash(key);
    let current = this.buckets[index];

    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return undefined; // Key not found
  }

  // Delete key-value pair
  public delete(key: K): boolean {
    const index = this.hash(key);
    let current = this.buckets[index];
    let prev: Entry<K, V> | undefined = undefined;

    while (current) {
      if (current.key === key) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.buckets[index] = current.next;
        }
        this.size--;
        return true;
      }
      prev = current;
      current = current.next;
    }

    return false; // Key not found
  }

  // Optional: Get current size
  public getSize(): number {
    return this.size;
  }
}
const hashTable = new HashTable<string, number>();

hashTable.set("apple", 5);
hashTable.set("banana", 10);

console.log(hashTable.get("apple")); // Output: 5
console.log(hashTable.get("banana")); // Output: 10

hashTable.delete("apple");
console.log(hashTable.get("apple")); // Output: undefined

console.log(hashTable.getSize()); // Output: 1
