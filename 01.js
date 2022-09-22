function menentukanNilai(input) {
    if (input >= 90) {
        console.log("Input  : " + input);
        console.log("Output : A");
    } else if (input >= 80 && input <= 89) {
        console.log("input  : " + input);
        console.log("Output : B");
    } else if (input >= 70 && input <= 79) {
        console.log("input  : " + input);
        console.log("Output : C");
    } else if (input >= 60 && input <= 69) {
        console.log("input  : " + input);
        console.log("Output : D");
    } else {
        console.log("input  : " + input);
        console.log("Output : E");
    }
}

menentukanNilai(30);
menentukanNilai(75);