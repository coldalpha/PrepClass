function filmRating(usia) {
    if (usia >= 21) {
        console.log("Input  : " + usia);
        console.log("Output : DEWASA");
    } else if (usia >= 13) {
        console.log("input  : " + usia);
        console.log("Output : REMAJA");
    } else if (usia >= 9) {
        console.log("input  : " + usia);
        console.log("Output : BIMBINGAN ORANG TUA");
    } else {
        console.log("input  : " + usia);
        console.log("Output : SEMUA USIA");
    }
}

filmRating(15);
filmRating(32);