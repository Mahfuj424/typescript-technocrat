"use strict";
// learn destructuring
{
    // Object destructuring
    const user = {
        company: "xyz",
        name: {
            firstName: "mahfuj",
            middleName: "alam",
            lastName: "ananda",
        },
        age: 20,
    };
    const { company, name: { middleName: midName } } = user;
    console.log(user);
    // array destructuring
    const myFriends = ['mahfuj', 'abdullah', 'shakil', 'mobin', 'salman', 'munna'];
    const [a, b, , c, ...rest] = myFriends;
}
