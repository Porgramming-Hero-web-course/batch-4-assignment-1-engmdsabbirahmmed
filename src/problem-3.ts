{
    //Problem - 3 => Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

    const countWordOccurrences = (sentence: string, word: string): number => {
        const sentenceLower: string = sentence.toLowerCase();
        const wordLower: string = word.toLowerCase();

        const splittedSentenceArray: string[] = sentenceLower.split(/[ .!#@*$&^%~`+=-_|'":;]/);
        let howMuchExistNumber: number = 0;

        for (let i = 0; i < splittedSentenceArray.length; i++) {
            if (wordLower === splittedSentenceArray[i]) {
                howMuchExistNumber += 1;
            }
        }
        return howMuchExistNumber;
    }

    const mySentence: string = "Hello from web. I love the web so much. After six month, i will be a good web developer";
    const myWord: string = "Web";

    console.log(countWordOccurrences(mySentence, myWord))

}