for (let char of "test") {
    // срабатывает 4 раза: по одному для каждого символа
    console.log(char); // t, затем e, затем s, затем t
}

let str = '𝒳😂';
for (let char of str) {
    console.log( char ); // 𝒳, а затем 😂
}