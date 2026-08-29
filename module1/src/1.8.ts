// Destructuring in Typescript
const user12 = {
  id: 345,
  name: {
    first: 'Az',
    second: 'Ma'
  },
  contact: '01456666',
  address: 'Dhaka',
};

const {contact , name: {second : secondName}} = user12;


const friendList = ['A','B','Chand','D', 'E']
const [,, bestFriend, ...rest] = friendList