const delectCapital = (word) => {

    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            count++;
        }
    }

    return count === 0 || count === word.length || count === 1 && word[0] === word[0].toUpperCase();
}

console.log(delectCapital("USA")); // true
console.log(delectCapital("FlaG")); // false 
console.log(delectCapital("leetcode")); // true
