function calcWordFrequencies() {
    const wordMap = new Map();
    const words = prompt("Enter a list of words separated by spaces:");

    // split the words by space
    const wordArray = words.split(" ");

    // loop through the array and update the map
    wordArray.forEach(word => {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    });

    // print out the word frequencies
    wordMap.forEach((value, key) => {
        console.log(key + " " + value);
    });
}