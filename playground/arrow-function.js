/**
 * Created by Aleksander on 2017-07-05.
 */
const square = (x) => x * x;

console.log(square(9));

const user = {
  name: 'Alex',
  friends: ['Luke', 'Adams', 'Pat', 'Wojt'],
  listFriends() {
    this.friends.forEach( friend => {
      console.log(arguments);
      console.log(`${friend} is a friend of ${this.name}`);
    })
  },
  sayHi () {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  }
};



user.sayHi(1,2,3);
user.listFriends();