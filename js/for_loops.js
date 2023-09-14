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

randomOddOrEven();