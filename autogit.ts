class HashTable<K, V> {
  private buckets: Array<Array<[K, V]>>;
  private capacity: number;

  constructor(capacity: number = 42) {
    this.capacity = capacity;
    this.buckets = Array.from({ length: capacity }, () => []);
  }

  // Simple hash function for string keys
  private hash(key: K): number {
    if (typeof key !== 'string') {
      throw new Error('Only string keys are supported');
    }
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash) % this.capacity;
  }

  set(key: K, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const pairIndex = bucket.findIndex(([k]) => k === key);

    if (pairIndex >= 0) {
      bucket[pairIndex][1] = value; // Update existing value
    } else {
      bucket.push([key, value]); // Insert new pair
    }
  }

  get(key: K): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const pair = bucket.find(([k]) => k === key);
    return pair ? pair[1] : undefined;
  }

  remove(key: K): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const pairIndex = bucket.findIndex(([k]) => k === key);

    if (pairIndex >= 0) {
      bucket.splice(pairIndex, 1);
      return true;
    }
    return false;
  }
}
