let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
        return { done: false, value: this.current++ };
        } else {
        return { done: true };
        }
    }
};
  

// range взят из примера выше
let arr = Array.from(range);
console.log(arr); // 1,2,3,4,5 (преобразование массива через toString работает)