{
  // learn rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend) => console.log(friend));
  };
  greetFriends("mahfuj", "abdullah", "mobin", "shakil");
}
