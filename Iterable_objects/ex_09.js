function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶';

console.log(slice(str, 1, 3)); // 😂𩷶

// а вот встроенный метод не поддерживает суррогатные пары
console.log(str.slice(1, 3)); // мусор (две части различных суррогатных пар)