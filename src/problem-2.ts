{
    //Problem - 2 => Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    type GenericArray<T> = Array<T>
    let myNewArray: GenericArray<number> = [];

    function removeDuplicates(numArray: GenericArray<number>): GenericArray<number> {
        for (let i = 0; i < numArray.length; i++) {
            if (!myNewArray.includes(numArray[i])) {
                myNewArray.push(numArray[i]);
            }
        }
        return myNewArray;
    }

    const numArray = [1, 2, 4, 3, 4, 5, 6, 6, 7, 4, 5, 6, 7];
    // console.log(removeDuplicates(numArray));
}