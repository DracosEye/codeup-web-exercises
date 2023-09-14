function printOdds() {
    let skipNum = 0;
    while (true) {
        skipNum = prompt("Enter an odd number between 1 and 50")
        if (skipNum >= 1 && skipNum <= 50 && skipNum % 2 == 1) {
            break;
        }
    }
    for (let i = 1; i < 50; i += 2) {
        if (i == skipNum) {
            console.log(`Yikes! Skipping number: ${skipNum}`);
            continue;
        }
        console.log(`Here is an odd number: ${i}`);
    }
}

// printOdds();