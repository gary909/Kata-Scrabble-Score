function scrabbleScore(str) {
    myStr = str.toUpperCase(); // To upper case
    myStr = myStr.replace(/\s/g, ""); // remove gaps
    myNum = 0; // Counter
    const myAlpha = {
        A: 1,
        E: 1,
        I: 1,
        O: 1,
        U: 1,
        L: 1,
        N: 1,
        R: 1,
        S: 1,
        T: 1,
        D: 2,
        G: 2,
        B: 3,
        C: 3,
        M: 3,
        P: 3,
        F: 4,
        H: 4,
        V: 4,
        W: 4,
        Y: 4,
        K: 5,
        J: 8,
        X: 8,
        Q: 10,
        Z: 10
    }

    for (var i = 0; i < myStr.length; i++) {
        const char = myStr[i]
        if (myStr[char] == myAlpha.char) {
            myNum = myNum + myAlpha[char];
        }
    }
    return myNum;
}

console.log(scrabbleScore("")); // 0
console.log(scrabbleScore('a')); // 1
console.log(scrabbleScore('street')); // 6
console.log(scrabbleScore(' a')); // 1
console.log(scrabbleScore("st re et")); // 6