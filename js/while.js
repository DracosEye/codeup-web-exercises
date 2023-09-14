function powersOfTwo() {
    let power = 1;
    while (power <= 16) {
        console.log(2 ** power);
        power++;
    }
}

function sellIceCream() {
    let conesRemaining = Math.floor(Math.random() * 50) + 50;

    do {
        let conesSelling = Math.floor(Math.random() * 5) + 1;
        if (conesSelling > conesRemaining) {
            console.log(`Cannot sell you ${conesSelling} cones, I only have ${conesRemaining}...`);
            continue;
        }
        console.log(`${conesSelling} cones sold...`);
        conesRemaining -= conesSelling;
    } while (conesRemaining > 0);
    console.log("Yay! I sold them all!")
}

// sellIceCream();
// powersOfTwo();