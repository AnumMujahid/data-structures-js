class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    let parentIndex;
    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] <= this.values[parentIndex]) break;
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = val;
      index = parentIndex;
    }
    return this.values;
  }

  remove() {
    let oldRoot = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      let leftChild;
      let rightChild;
      let leftChildIdx;
      let rightChildIdx;
      let swap;
      while (true) {
        leftChildIdx = 2 * idx + 1;
        rightChildIdx = 2 * idx + 2;
        swap = null;
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild > element) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
    return oldRoot;
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    let parentIndex;
    while (index > 0) {
      parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] >= this.values[parentIndex]) break;
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = val;
      index = parentIndex;
    }
    return this.values;
  }

  remove() {
    let oldRoot = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];
      let leftChild;
      let rightChild;
      let leftChildIdx;
      let rightChildIdx;
      let swap;
      while (true) {
        leftChildIdx = 2 * idx + 1;
        rightChildIdx = 2 * idx + 2;
        swap = null;
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild < element) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild < element) ||
            (swap !== null && rightChild < leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
    return oldRoot;
  }
}
