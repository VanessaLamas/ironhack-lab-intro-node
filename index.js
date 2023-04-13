class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    let i = 0;
    while (i < this.items.length && this.items[i] < item) {
      i++;
    }
    this.items.splice(i, 0, item);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos >= this.items.length || pos < 0) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }
  sum() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i];
    }
    return total;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let total = this.sum();
    let average = total / this.items.length;
    return average;
  }
}

module.exports = SortedList;


