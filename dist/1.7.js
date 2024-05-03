"use strict";
{
    // learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(friend));
    };
    greetFriends("mahfuj", "abdullah", "mobin", "shakil");
}
