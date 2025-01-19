interface IComparable<T> {
  compareTo(other: T): number;
}

class QuickSort<T> {
  private arr: T[];

  constructor(arr: T[]) {
    this.arr = arr;
  }

  quickSort(): T[] {
    this.quickSortHelper(0, this.arr.length - 1);
    return this.arr;
  }

  private quickSortHelper(low: number, high: number): void {
    if (low < high) {
      const pivot = this.partition(low, high);
      this.quickSortHelper(low, pivot - 1);
      this.quickSortHelper(pivot + 1, high);
    }
  }

  private partition(low: number, high: number): number {
    const pivot = this.arr[low];
    let i = low + 1;
    let j = high;

    while (i <= j) {
      while (i <= j && (this.arr[i] as IComparable<T>).compareTo(pivot) <= 0) {
        i++;
      }

      while (i <= j && (this.arr[j] as IComparable<T>).compareTo(pivot) > 0) {
        j--;
      }

      if (i <= j) {
        [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
        i++;
        j--;
      }
    }

    [this.arr[low], this.arr[j]] = [this.arr[j], this.arr[low]];
    return j;
  }
}

class IntegerComparator implements IComparable<number> {
  compareTo(other: number): number {
    return this - other;
  }
}

// Example usage:
const arr: number[] = [5, 2, 8, 3, 1, 4, 6];
const quickSort = new QuickSort(arr);
const sortedArr = quickSort.quickSort();
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 8]
