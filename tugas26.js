function tugas26() {
    var bilangan = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    for (i = 0; i < bilangan.length; i++) {
        if (isFinite(bilangan[i]) === true) {
            console.log("Angka " + bilangan[i] + " NOT Infinity")
        } else {
            console.log("infinity")
        };
    }
}

tugas26()