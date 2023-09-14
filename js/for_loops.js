function showMultiplicationTable(base) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${base} x ${i} = ${base * i}`);
    }
}

function randomOddOrEven() {
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * 181 + 20);
        if (num % 2 === 0) {
            console.log(`${num} is even`);
        } else {
            console.log(`${num} is odd`);
        }
    }
}

function repeatingNumbers() {
    for (let i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }
}

function printFiveMults() {
    for (let i = 100; i > 0; i -= 5) {
        console.log(i);
    }
}

printFiveMults();