function tahunKabisat(input) {
    if ((input % 4 == 0 && input % 100 != 0) || input % 400 == 0) {
        //Tahun Kabisat adalah tahun yang habis dibagi 4 tetapi tidak habis dibagi 100
        //dan apabila habis dibagi 100 maka harus habis dibagi 400
        console.log("Input  : " + input);
        console.log("Output : kabisat");
    } else {
        console.log("input  : " + input);
        console.log("Output : Bukan kabisat");
    }
}

tahunKabisat(1900);
tahunKabisat(2000);
tahunKabisat(2001);
tahunKabisat(2016);