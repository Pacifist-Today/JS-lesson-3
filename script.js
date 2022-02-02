// Первая задача Палиндром

const detectPalindrome = (str) => {
    if(typeof str !== 'string'){
        return 'Вводимое значение не является словом';
    }
    str = str.trim().toLowerCase();
    if (str == '') {
        return 'Строка пуста';
    }
    if(str !== str.split('').reverse().join('')){
        return 'Строка не является палиндромом!';
    }
    return 'Строка является палиндромом!'
};

console.log(detectPalindrome("level"));
console.log(detectPalindrome("ololo"));
console.log(detectPalindrome("cool"));

// Вторая задача Повторения слова

function repeat (str, n) {
    result = str.repeat(n)
    console.log(result)
}

repeat ("string", 5)
repeat ("cool", 10)

// Третья задача call back

function operation (a, b, sumCallback) {
    a = a**2
    b = b**2
    console.log(a,b)
    sumCallback(a,b)
}

function sumCallback (a,b) {
    let summary = a + b
    console.log(summary)
    return summary;
}

operation (2,5,sumCallback)
operation (4,8,sumCallback)
operation (5,7,sumCallback)
operation (8,6,sumCallback)