{
    //Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

    interface User {
        name: string;
        age: number | string;
        profession: string;
    }

    const getProperty = <T, U extends keyof T>(object: T, propertyName: U) => {
        return object[propertyName]
    };

    const user: User = {
        name: 'Md. Sabbir Ahmmed',
        age: '23Y',
        profession: 'A learner'
    }

    const userAge = getProperty(user, 'profession');
    // console.log(userAge);
}