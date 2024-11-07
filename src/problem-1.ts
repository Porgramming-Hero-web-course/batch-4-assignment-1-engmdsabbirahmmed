{
    //Problem - 1 => Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

    const sumArray = (array: number[]): number => {
        const summationOfNumber = array.reduce((acc, number) => acc + number, 0);
        return summationOfNumber;
    }

    const myArray: number[] = [43, 56, 78, 98, 83, 33, 21];
    // console.log(sumArray(myArray))
}