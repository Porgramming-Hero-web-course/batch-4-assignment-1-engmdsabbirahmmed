{
    //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface MyProfile {
        name: string;
        age: number | string;
        email: string;
    }

    type MyUpdateProfileData = Partial<MyProfile>

    const updateProfile = (profile: MyProfile, updatedData: MyUpdateProfileData): object => {
        return { ...profile, ...updatedData }
    };

    const myProfile: MyProfile = {
        name: 'Md. Sabbir Ahmmed',
        age: 23,
        email: 'sabbir@gmail.com'
    }

    const updatedProfile = updateProfile(myProfile, { age: 24 });
    // console.log(updatedProfile)
}