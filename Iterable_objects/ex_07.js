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

// возводим каждое число в квадрат
let arr = Array.from(range, num => num * num);

console.log(arr); // 1,4,9,16,25