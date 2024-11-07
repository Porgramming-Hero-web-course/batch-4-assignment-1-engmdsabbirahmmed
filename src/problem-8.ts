{
    //Create a function validateKeys(userData: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

    const validateKeys = <T extends object>(userObj: T, keys: (keyof T)[]): boolean =>{
        for (const key of keys) {
            if (!(key in userObj)) {
                return false;
            }
        }
        return true;
    }

    const user = {
        name: 'sabbir',
        age: 23,
        address: 'shantinagar'
    }
    
    
    const validateKeysResult = validateKeys(user, ['name', 'age', 'address'])
    // console.log(validateKeysResult);
}